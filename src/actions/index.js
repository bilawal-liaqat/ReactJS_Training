import {
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAILURE,
  GET_COMMENTS_REQUEST,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_FAILURE,
  DELETE_COMMENT_REQUEST,
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_FAILUR
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





export const actions = {
    getCommentsRequest: getCommentsRequest,
    getCommentsSuccess: getCommentsSuccess,
    getCommentsFailure: getCommentsFailure,
    addCommentRequest: addCommentRequest,
    addCommentSuccess: addCommentSuccess,
    addCommentFailure: addCommentFailure

  };
  