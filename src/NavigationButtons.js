import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadDataDispatcher } from './dispatchers';

class StartButton extends Component {
    onClick () {
	console.log('after', this.props.after);
	this.props.loadData(this.props.name);
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

class NextButton extends Component {
    onClick () {
	console.log('after', this.props.after);
	this.props.loadData(this.props.name,
			    this.props.view,
			    this.props.after);
    }

    render () {
	return (
		<input 
	    type="button" 
	    value="Next 25 posts"
	    onClick={this.onClick.bind(this)}
		/>
	);
    }
}

class NavigationButtons extends Component {
    render () {
	return (
		<span>
		<StartButton /> &nbsp;
		<NextButton />
		</span>
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

StartButton = connect(mapStateToProps, mapDispatchToProps)(StartButton);
NextButton = connect(mapStateToProps, mapDispatchToProps)(NextButton);

export default NavigationButtons;
