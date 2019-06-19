import { takeLatest, all } from 'redux-saga/effects'

import { addClickCount } from './other'

import { otherActionTypes } from '../reducer/other'


function * rootSaga () {
  yield all([
    takeLatest(otherActionTypes.ADD_CLICK_COUNT_REQUEST, addClickCount)
  ])
}

export default rootSaga