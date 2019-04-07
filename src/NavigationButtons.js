import React, { Component } from 'react';

import StartButton from './StartButton';
import NextButton from './NextButton';

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

export default NavigationButtons;
