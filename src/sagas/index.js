import {all} from 'redux-saga/effects';


import {getCommentSaga , postCommentSaga , deleteCommentSaga} from './comments'
import { func } from 'prop-types';


function* rootSaga(){
    yield all ([getCommentSaga() , postCommentSaga() , deleteCommentSaga()]);
}

export default rootSaga;