import {
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAILURE,
  GET_COMMENTS_REQUEST,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_FAILURE,
  DELETE_COMMENT_REQUEST,
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_FAILURE,
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE,
  GET_POSTS_CLEAR,
} from "../constants/actionTypes";

 const getCommentsRequest = (postId) => ({
      type: GET_COMMENTS_REQUEST,
      payload: {postId}
     });

 const getCommentsSuccess = comments => ({
  type: GET_COMMENTS_SUCCESS,
  payload: comments
});
 const getCommentsFailure = error => ({
  type: GET_COMMENTS_FAILURE,
  payload: "Error fetching comments. Try again later!" + error
});


const addCommentRequest = (postId, name , message) => 
    ({
    type: ADD_COMMENT_REQUEST,
    payload: {postId , name , message }
   });

const addCommentSuccess = comment => ({
type: ADD_COMMENT_SUCCESS,
payload: comment
});
const addCommentFailure = error => ({
type: ADD_COMMENT_FAILURE,
payload: "Error posting comment. Try again later!" + error
});



const deleteCommentRequest = (postId, commentId) => 
    ({
    type: DELETE_COMMENT_REQUEST,
    payload: {postId , commentId }
   });

const deleteCommentSuccess = comment => ({
type: DELETE_COMMENT_SUCCESS,
payload: comment
});
const deleteCommentFailure = error => ({
type: DELETE_COMMENT_FAILURE,
payload: "Error Deleting comment. Try again later!" + error
});




const getPostsRequest = (pageNum, searchKeyword , isSearch) => ({
  type: GET_POSTS_REQUEST,
  payload: {pageNum, searchKeyword, isSearch}
 });

const getPostsSuccess = posts => ({
type: GET_POSTS_SUCCESS,
payload: posts
});
const getPostsFailure = error => ({
type: GET_POSTS_FAILURE,
payload: "Error fetching Posts. Try again later!" + error
});



export const actions = {
    getCommentsRequest: getCommentsRequest,
    getCommentsSuccess: getCommentsSuccess,
    getCommentsFailure: getCommentsFailure,
    addCommentRequest: addCommentRequest,
    addCommentSuccess: addCommentSuccess,
    addCommentFailure: addCommentFailure,
    deleteCommentRequest: deleteCommentRequest,
    deleteCommentSuccess: deleteCommentSuccess,
    deleteCommentFailure: deleteCommentFailure,
    getPostsRequest: getPostsRequest,
    getPostsSuccess: getPostsSuccess,
    getPostsFailure: getPostsFailure,
  };
  