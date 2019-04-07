import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadDataDispatcher } from './dispatchers';

class StartButton extends Component {
    onClick () {
	console.log('after', this.props.after);
	this.props.loadData(this.props.name, this.props.view);
    }

    render () {
	return (
		<input 
	    type="button" 
	    value={"Reload" + (this.props.newPosts ? "(New Posts)" : "")}
	    onClick={this.onClick.bind(this)}
		/>
	);
    }
}


const mapStateToProps = (state) => {
    return {
	name: state.name,
	after: state.after,
	view: state.view,
	newPosts: state.newPosts
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
	loadData: (name, after, count) => {
	    dispatch(loadDataDispatcher(name, after, count))
	}
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(StartButton);
