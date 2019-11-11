import {all} from 'redux-saga/effects';


import {getCommentSaga , postCommentSaga} from './comments'
import { func } from 'prop-types';


function* rootSaga(){
    yield all ([getCommentSaga() , postCommentSaga()]);
}

export default rootSaga;