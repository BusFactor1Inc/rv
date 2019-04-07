import React, { Component } from 'react';

// From: https://stackoverflow.com/questions/847185/convert-a-unix-timestamp-to-time-in-javascript
function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = month + ' ' + date + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
  return time;
}

class PostInfo extends  Component {
    render () {
	return <div className="PostInfo">
	    <span>Author: {this.props.author}</span> &nbsp;
	    <span>Date: {timeConverter(this.props.time)}</span> &nbsp;
	    <a href={"https://reddit.com/" + this.props.comments}
	       target="_blank" rel="noopener noreferrer">Comments</a>
	    </div>
    }
}

class PostLink extends Component {
    render () {
	let thumbnail;

	if(this.props.thumbnail.startsWith('http')) {
	    thumbnail = 
		<a href={this.props.url} 
	           target="_blank" rel="noopener noreferrer">
		<img className="Thumbnail" 
	    src={this.props.thumbnail}
	    width='42px' 
	    alt="Thumbnail" 
	    />
		</a>
	}		

	return <div className="PostLink">
	    {thumbnail}
	    <a href={this.props.url}
	       target="_blank" rel="noopener noreferrer">{this.props.title}</a>
	    </div>
    }	    
}

class Post extends Component {
    render () {
	//console.log(this.props.data);
	let data = this.props.data || {
	    id: 0,
	    title: "Unknown",
	    url: "http://",
	    thumbnail: "",
	    author: "Unknown",
	    permalink: "http://",
	    time: "0"
	}

	return (
		<div key={data.id} 
	             className="Post">
		<PostLink
	    title={data.title}
	    url={data.url}
	    thumbnail={data.thumbnail}
	    />
		<PostInfo 
	    author={data.author} 
	    comments={data.permalink} 
	    time={data.created_utc}
	    />
		</div>
	);
	}
}

export default Post;
