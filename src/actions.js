////////////////////////////////////////////////////////////////////////////////
// Actions
export const isLoadingAction = (isLoading) => ({
    type: 'IS_LOADING',
    isLoading
})

export const hasErroredAction = (hasErrored) => ({
    type: 'HAS_ERRORED',
    hasErrored
})

export const postsAction = (posts) => ({
    type: 'POSTS',
    posts
})

export const nameAction = (name) => ({
    type: 'NAME',
    name
})

export const beforeAction = (before) => ({
    type: 'BEFORE',
    before
})

export const afterAction = (after) => ({
    type: 'AFTER',
    after
})

export const newPostsAction = (newPosts) => ({
    type: 'NEW_POSTS',
    newPosts
})

export const viewAction = (view) => ({
    type: 'VIEW',
    view
})

