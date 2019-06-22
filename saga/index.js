import { takeLatest, all } from 'redux-saga/effects'

import { getUser } from './other'

import { otherActionTypes } from '../reducer/other'


function * rootSaga () {
  yield all([
    takeLatest(otherActionTypes.GET_USER_REQUEST, getUser)
  ])
}

export default rootSaga