Reddit Viewer (rv)
--

A simple subreddit viewer written in React and Redux.

Usage:

```$ yarn build && node server```

This will build the production site and run the fetching server.

By default it will load posts from the the /r/news page.

Enter a subreddit into the text box at the top and hit enter or click
the 'Load' button to load a different subreddit.

Once loaded there are 2 buttons: "Reload" which will reload the first
page of the forum, and "Next 25 Posts" to load the next page of posts.

--
Due to CORS restrictions, an external server is used to fetch the JSON data
from reddit.com.

--
Burton Samograd

2019

