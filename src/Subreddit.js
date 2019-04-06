import React, { Component } from 'react';
import { connect } from 'react-redux';

import NavigationButtons from './NavigationButtons';

class Subreddit extends Component {
    render () {
	let subredditName;

	if(this.props.name) {
	    subredditName = "/r/" + this.props.name;
	}


	if(!this.props.hasErrored && this.props.posts.length > 0) {
	    return (
		    <div className="Subreddit">
		    <span>{this.props.view}</span> &nbsp;
		    <a href={"https://reddit.com" + subredditName}
		       target="_blank" rel="noopener noreferrer"
		    >
		    {subredditName}
    	        </a> &nbsp;
		    <NavigationButtons />
		    <hr />
		    </div>
	);
	} else {
	    return <span />;
	}
    }
}

const mapStateToProps = (state) => {
    return {
	posts: state.posts,
	name: state.name,
	view: state.view,
	hasErrored: state.hasErrored
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Subreddit);
