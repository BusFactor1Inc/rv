import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import LoadButton from './LoadButton';
import NameField from './NameField';
import NavigationButtons from './NavigationButtons';
import Post from './Post';
import Posts from './Posts';
import Subreddit from './Subreddit';

import store from './store'

function render (x) {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}>{x}</Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
}

it('App renders without crashing', () => {
    render(<App />);
});

it('LoadButton renders without crashing', () => {
    render(<LoadButton />);
});

it('NameField renders without crashing', () => {
    render(<NameField />);
});

it('NavigationButtons renders without crashing', () => {
    render(<NavigationButtons />);
});

it('Post renders without crashing', () => {
    render(<Post />);
});

it('Posts renders without crashing', () => {
    render(<Posts />);
});

it('Subreddit renders without crashing', () => {
    render(<Subreddit />);
});
