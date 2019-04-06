import React, { Component } from 'react';
import { connect } from 'react-redux';

class NameField extends Component {
    onKeyDown (e) {
	if(e.key === 'Enter') {
	    let loadButton = document.getElementById('LoadButton');
	    loadButton.click();
	}
    }
    
    render () {
	return (
		<input 
	    id="name" 
	    type="text" 
	    placeholder={this.props.name}
	    onKeyDown={this.onKeyDown.bind(this)}
		/>
	)}
}

const mapStateToProps = (state) => {
    return {
	name: state.name
    };
}

export default connect(mapStateToProps)(NameField);
