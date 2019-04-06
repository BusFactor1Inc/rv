import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadDataDispatcher } from './dispatchers';

class LoadButton extends Component {
    onClick () {
	let name = document.getElementById('name');
	this.props.loadData(name.value);
    }
    render () {
	return (
		<input id="LoadButton" type="button" value="Load" 
	               onClick={this.onClick.bind(this)} />
	)}
}

const mapDispatchToProps = (dispatch) => {
    return {
	loadData: (name, start, after, count) => {
	    dispatch(loadDataDispatcher(name, start, after, count))
	}
    }
}

export default connect((state) => { return {} }, mapDispatchToProps)(LoadButton)
