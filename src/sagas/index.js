import {all} from 'redux-saga/effects';


import {getCommentSaga} from './comments'
import { func } from 'prop-types';


function* rootSaga(){
    yield all ([getCommentSaga()]);
}

export default rootSaga;