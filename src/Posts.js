import React, { Component } from 'react';
import { connect } from 'react-redux';

import Post from './Post';

class Posts extends Component {
    render () {
	if(this.props.isLoading) {
	    return <span>Loading...</span>;
	}

	if(this.props.hasErrored) {
	    return <span>Loading error; likely the Subreddit does not exist.</span>
	}

	if(this.props.posts.length > 0) {
	    return this.props.posts.map((post, i) => (
		    <Post key={i} data={post.data}/>
	    ));
	}

	return <span>Please enter a Subreddit name above 
	to view its posts.</span>
    }
}

const mapStateToProps = (state) => {
    return {
	posts: state.posts,
	isLoading: state.isLoading,
	hasErrored: state.hasErrored,
	name: state.name
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);

