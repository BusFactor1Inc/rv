import { isLoadingAction,
	 hasErroredAction,
	 postsAction,
	 nameAction,
	 afterAction,
	 beforeAction,
	 newPostsAction,
	 viewAction } from './actions';

let refresher;

export function loadDataDispatcher (name = "news", view = "New", after = null) {
    return (dispatch) => {
	console.log('Fetching posts: ' + name, view, after);
	dispatch(viewAction(view));
	dispatch(afterAction(after));
	dispatch(isLoadingAction(true));
	dispatch(hasErroredAction(false));
	dispatch(newPostsAction(false));

	let viewSelector = document.getElementById('view');
	if(view) {
	    // Set the view Selector
	    viewSelector.value = view;
	    
	} else {
	    let view = viewSelector.value;
	    dispatch(viewAction(view));
	}

	let url = "/subreddit?name=" + name +
	    (view ? ("&view=" + view) : "") +
	    (after ? ("&after=" + after) : "");

	fetch(url)
	    .then((response) => {
		if(!response.ok) {
		    throw new Error(response.statusText);
		}

		dispatch(isLoadingAction(false));

		return response;
	    })
	    .then((response) => response.json())
	    .then((postData) => {
		console.log("Data action", postData.data);
		dispatch(nameAction(name));
		dispatch(viewAction(view));
		dispatch(afterAction(postData.data.after));
		dispatch(postsAction(postData.data.children));

		if(refresher) {
		    clearInterval(refresher);
		}

		refresher = setInterval(() => {
		    refreshDataDispatcher(name, view, after)(dispatch);
		}, 60*1000);


	    })
	    .catch((e) => {
		console.log('Loding Error:' + e);
		dispatch(hasErroredAction(true));

		dispatch(afterAction(null));
		dispatch(beforeAction(null));
		dispatch(postsAction([]));

	    })
    }
}

export function refreshDataDispatcher (name, view = "New", lastAfter) {
    return (dispatch) => {
	console.log('Refreshing posts: ' + name, view, lastAfter);

	let url = "/subreddit?name=" + name +
	    (view ? "&view=" + view : "") +
	    (lastAfter ? "&before=" + lastAfter : "") +
	    "&limit=1";

	fetch(url)
	    .then((response) => {
		if(!response.ok) {
		    throw new Error(response.statusText);
		}

		return response;
	    })
	    .then((response) => response.json())
	    .then((postData) => {
		console.log("Data action", postData.data);
		if(lastAfter !== null && postData.data.after !== lastAfter) {
		    dispatch(newPostsAction(true));
		}
	    })
	    .catch((e) => {
		console.log('Loding Error:' + e);
		dispatch(hasErroredAction(true));
	    })
    }
}
