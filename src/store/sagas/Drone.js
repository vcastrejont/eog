import {
  takeLatest,
  call,
  put,
  cancel,
  take,
  fork,
  delay,
  all
} from "redux-saga/effects";
import API from "../api";
import * as actions from "../actions";
import { FETCH_DRONE, FETCH_CANCEL, completeFetch } from "../reducers/Drone";

function* startDroneFetch(action) {
  while (true) {
    const { error, data } = yield call(API.getDroneFeed);
    if (error) {
      yield put({ type: actions.API_ERROR, code: error.code });
      yield cancel();
      return;
    }
    yield put(completeFetch(data.data));
    yield delay(4000);
  }
}

function* startPoll(action) {
  const fetch = yield fork(startDroneFetch);
  yield take(FETCH_CANCEL);
  yield cancel(fetch);
}

function* watchFetchDrone() {
  yield all([takeLatest(FETCH_DRONE, startPoll)]);
}

export default [watchFetchDrone];
