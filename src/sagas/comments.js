import { put, call, take } from "redux-saga/effects";
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

import API from '../services/API'
import {actions} from '../actions'


export function* getCommentSaga(){
    while(true){
        try {
            const {payload} = yield take(GET_COMMENTS_REQUEST);
            const {data} = yield call(API.getComments, payload.postId);
            yield put(actions.getCommentsSuccess({postId: payload.postId , data}));

        }
        catch (error){
            console.log(error);
            yield put(actions.getCommentsFailure(error))
        }
    }
}

export function* postCommentSaga() {
    while (true) {
      try {
        const { payload } = yield take(ADD_COMMENT_REQUEST);
        const { data } = yield call(API.submitComment, payload);
        console.log(postCommentSaga , data)
        yield put(actions.addCommentSuccess({ data }));
      } catch (error) {
        yield put(actions.addCommentFailure({ error: error }));
      }
    }
  }
  