const fetch = require('node-fetch');
const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, '..', 'build')));

const Cache = require('timed-cache');

let cache = new Cache({ defaultTtl: 60 * 1000 }); // 60 second cache

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

app.get('/subreddit', function (req, res) {
    let name = req.query.name;
    let before = req.query.before;
    let after = req.query.after;
    let view = req.query.view.toLowerCase() || "new";

    let cacheEntry = { name, before, after, view };;
    let cacheHit = cache.get(cacheEntry);
    if(cacheHit) {
	console.log('Cache hit: ' + JSON.stringify(cacheEntry));
	res.setHeader('Content-type', 'application/json');
	res.end(cacheHit);
	return;
    }

    let url = "https://reddit.com/r/" + name + "/" +
	view + ".json?" +
	(after ? "&after=" + after : "") +
	(before ? "&before=" + before : "");

    console.log(url);

    fetch(url)
	.then((response) => {
	    if(!response.ok) {
		throw new Error(response.statusText);
	    }

	    return response;
	})
	.then((response) => response.json())
	.then((json) => {
	    res.setHeader('Content-type', 'application/json');
	    let jsonString = JSON.stringify(json);
	    cache.put(cacheEntry, jsonString);
	    res.end(jsonString);
	})
	.catch((e) => {
	    console.log('error:' + e)
	    res.setHeader('Content-type', 'application/json');
	    res.end(JSON.stringify({}));
	});
});

console.log(process.env.PORT || 8080);
app.listen(process.env.PORT || 8080);
