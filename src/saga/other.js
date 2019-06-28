import { put, call } from 'redux-saga/effects';
import { otherActionTypes } from '../actions/other';
import { getUsers } from '../service/api';

export function* getUser() {
  const { ok, problem, data } = yield call(getUsers);
  yield put(
    ok
      ? { type: otherActionTypes.GET_USER_SUCCESS, data }
      : { type: otherActionTypes.GET_USER_FAILURE, problem }
  );
}
