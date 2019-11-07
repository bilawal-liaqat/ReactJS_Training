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

 const getCommentsRequest = () => ({ type: GET_COMMENTS_REQUEST });

 const getCommentsSuccess = comments => ({
  type: GET_COMMENTS_SUCCESS,
  payload: comments
});
 const getCommentsFailure = error => ({
  type: GET_COMMENTS_FAILURE,
  payload: "Error fetching posts. Try again later!" + error
});



export const actions = {
    getCommentsRequest: getCommentsRequest,
    getCommentsSuccess: getCommentsSuccess,
    getCommentsFailure: getCommentsFailure
  };
  