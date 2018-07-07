import request from '../helpers/request'

export const ADD_POST = "ADD_POST"
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS"
export const FETCH_POSTS_FAILED = "FETCH_POSTS_FAILED"
export const DELETE_POST = "DELETE_POST"
export const EDIT_POST = "EDIT_POST"

export const addPost = (title, body ) => {
  let newPost = {
    title: title,
    body: body
  }
  return dispatch => {
    request(`/blog_posts`, `post`, newPost)
    .then(post => dispatch({
      type: ADD_POST,
      payload: post
    }))
  }
}

export const fetchPosts = () => {
  return dispatch => {
    request('/blog_posts?limit=10&orderByColumn=id&orderDirection=desc')
      .then(posts => dispatch({
        type: FETCH_POSTS_SUCCESS,
        payload: posts.data.blog_posts
      }))
  }
}

export const deletePost = (id) => {
  return dispatch => {
    request(`/blog_posts/${id}`, 'delete')
    .then(posts => dispatch({
      type: DELETE_POST,
      payload: posts
    }))
    .then(response => {
      dispatch(fetchPosts())
    })
  }
}

export const editPost = (id =>{
  return dispatch => {
    request(`/blog_posts/${id}`, 'patch')
    .then(post=> dispatch({
      type: EDIT_POST,
      payload: post
    }))
    .then(response=>{
      dispatch(fetchPosts())
    })
  }
})
