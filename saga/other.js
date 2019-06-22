import { put, call, takeLatest } from 'redux-saga/effects'
import { otherActionTypes } from '../reducer/other'
import API from '../service/api'
import axios from 'axios'

const api = API.APICreate()

function * getUser () {
  try {
    const res = yield call(api.getUser)
    yield put({ type: otherActionTypes.GET_USER_SUCCESS, data: res.data })
  } catch (error) {
    yield put({ type: otherActionTypes.GET_USER_FAILURE, error })
  }
}

export {
  getUser
}