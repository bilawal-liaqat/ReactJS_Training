import { put, call, take } from "redux-saga/effects";
import {
    GET_POSTS_REQUEST,
    GET_POSTS_SUCCESS,
    GET_POSTS_FAILURE
  } from "../constants/actionTypes";

import API from '../services/API'
import {actions} from '../actions'



export function* getPostsSaga(){
    while(true){
        try {

            const {payload} = yield take(GET_POSTS_REQUEST);
            console.log("getPostsSaga", payload);

            const {data} = yield call(API.getPosts, payload.pageNum, payload.searchKeyword);
            yield put(actions.getPostsSuccess(data));

        }
        catch (error){
            console.log(error);
            yield put(actions.getPostsFailure(error))
        }
    }
}