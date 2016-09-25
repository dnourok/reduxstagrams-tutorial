// Sometimes people do multiple actionCreators but since our app is small we're going to be doing one

// increment
export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}

// immediately returns an object since actions are just objects that have 2 things
// want to send as little information as is needed with your action

// add comment
export function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

// remove comment

export function removeComment(postId, i) {
  return {
    type: 'REMOVE_COMMENT',
    i,
    postId
  }
}

// i is for which comment you want to delete which is representing the index

// Need to update our state once the action is dispatched (which is store in Redux), which is where reducers come in
// We need a reducer on the other end to handel and update the actual state
// We create a reducer for every single piece of state
