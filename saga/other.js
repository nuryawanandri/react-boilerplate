import { put, takeLatest } from 'redux-saga/effects'
import { addClickCountSuccess } from '../reducer/other'

function * addClickCount () {
  yield put(addClickCountSuccess())
}

export {
  addClickCount
}