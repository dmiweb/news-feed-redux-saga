import { call, put, spawn, takeLatest, cancelled, CallEffect, PutEffect, CancelledEffect, delay } from "redux-saga/effects"
import { getNewsSuccess, getNewsFailure } from "../actions/actionCreators"
import { REQUEST_NEWS, REQUEST_PREV_NEWS } from "../actions/actionTypes"
import { fetchData } from "../api"
import { TNews } from "../models/";
import { TGetNewsSuccessAction, TGetNewsFailureAction, TRequestNewsAction, TRequestPrevNewsAction } from "../models";

function* handleGetNewsSaga(action: TRequestNewsAction | TRequestPrevNewsAction):
  Generator<
    | CallEffect<TNews[]>
    | PutEffect<TGetNewsSuccessAction | TGetNewsFailureAction>
    | CancelledEffect,
    void,
    unknown
  > {
  let url = import.meta.env.VITE_GET_NEWS_URL;
  const abortController: AbortController = new AbortController();
  const signal = abortController.signal;

  if (action.type === REQUEST_PREV_NEWS) {
    const lastNewsId = action.payload.id;
    url = `${url}?lastSeenId=${lastNewsId}`;
  }

  while (true) {
    try {
      const news: unknown = yield call(fetchData, url, signal);
      if (Array.isArray(news)) {
        yield put(getNewsSuccess(news));
        break;
      }
    } catch (err: unknown) {
      void err;
      yield put(getNewsFailure({ error: "Произошла ошибка!" }));

    }
    finally {
      if (yield cancelled()) {
        abortController.abort();
      }
    }
    yield delay(3000);
  }
}

function* watchGetNewsSaga() {
  yield takeLatest(REQUEST_NEWS, handleGetNewsSaga);
}

function* watchGetPrevNewsSaga() {
  yield takeLatest(REQUEST_PREV_NEWS, handleGetNewsSaga);
}

export default function* saga() {
  yield spawn(watchGetNewsSaga);
  yield spawn(watchGetPrevNewsSaga);
}