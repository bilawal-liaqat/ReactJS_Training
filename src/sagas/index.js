import {all} from 'redux-saga/effects';


import {getCommentSaga , postCommentSaga , deleteCommentSaga} from './comments'
import {getPostsSaga } from './posts'

import { func } from 'prop-types';


function* rootSaga(){
    yield all ([getCommentSaga() , postCommentSaga() , deleteCommentSaga() , getPostsSaga()]);
}

export default rootSaga;