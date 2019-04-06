import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadDataDispatcher } from './dispatchers';

class LoadButton extends Component {
    onClick () {
	let name = document.getElementById('name');
	let selector = document.getElementById('view');
	this.props.loadData(name.value, selector.value);
    }
    render () {
	return (
		<input id="LoadButton" type="button" value="Load" 
	               onClick={this.onClick.bind(this)} />
	)}
}

const mapDispatchToProps = (dispatch) => {
    return {
	loadData: (name, view, after) => {
	    dispatch(loadDataDispatcher(name, view, after))
	}
    }
}

export default connect((state) => { return {} }, mapDispatchToProps)(LoadButton)
