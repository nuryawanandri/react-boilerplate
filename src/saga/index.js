import { takeLatest, all } from 'redux-saga/effects';
import { getUser } from './other';
import { otherActionTypes } from '../actions/other';

export default function* rootSaga() {
  yield all([takeLatest(otherActionTypes.GET_USER_REQUEST, getUser)]);
}
