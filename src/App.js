import React, { Component } from 'react';
import './App.css';

import LoadButton from './LoadButton';
import NameField from './NameField';
import Subreddit from './Subreddit';
import Posts from './Posts';

class Selector extends Component {
    render () {
	return ( <select id="view">
		 <option value="Top">Top</option>
		 <option value="New">New</option>
		 <option value="Hot">Hot</option>
		 </select>
	       );
    }
}

class TopBar extends Component {
    render () {
	return (
		<div className="TopBar">
		SubReddit Viewer (sv): &nbsp;
		<NameField /> &nbsp;
		<LoadButton /> &nbsp;
		<Selector />
		</div>
	);
    }
}

class App extends Component {
  render() {
    return (
	    <div className="App">
	    <hr />
	    <TopBar />
	    <hr />
	    <center>
	    <Subreddit />
	    <Posts />
	    <hr />
	    <Subreddit />
	    Burton Samograd - 2019
	    </center>
      </div>
    );
  }
}

export default App;
