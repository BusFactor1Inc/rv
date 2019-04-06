import { combineReducers } from 'redux';

////////////////////////////////////////////////////////////////////////////////
// Reducers
function isLoading(state = false, action) {
    switch(action.type) {
    case 'IS_LOADING':
	return action.isLoading;
    default:
	return state;
    }
}

function hasErrored(state = false, action) {
    switch(action.type) {
    case 'HAS_ERRORED':
	return action.hasErrored;
    default:
	return state;
    }
}

function posts(state = [], action) {
    switch(action.type) {
    case 'POSTS':
	return action.posts;

    default:
	return state;
    }
}

function name(state = "all", action) {
    switch(action.type) {
    case 'NAME':
	return action.name;

    default:
	return state;
    }
}

function after(state = null, action) {
    switch(action.type) {
    case 'AFTER':
	return action.after;

    default:
	return state;
    }
}

function before(state = null, action) {
    switch(action.type) {
    case 'BEFORE':
	return action.before;

    default:
	return state;
    }
}

function newPosts(state = false, action) {
    switch(action.type) {
    case 'NEW_POSTS':
	return action.newPosts;

    default:
	return state;
    }
}

function view(state="new", action) {
    switch(action.type) {
    case 'VIEW':
	return action.view;
    default:
	return state;
    }
}

const rootReducer = combineReducers({
    isLoading,
    hasErrored,
    posts,
    name,
    before,
    after,
    newPosts,
    view
});

export default rootReducer;
