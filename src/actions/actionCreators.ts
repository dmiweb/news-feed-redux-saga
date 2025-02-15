import {
  REQUEST_NEWS,
  GET_NEWS_SUCCESS,
  GET_NEWS_FAILURE,
  REQUEST_PREV_NEWS
} from './actionTypes';
import {
  TRequestNewsAction,
  TGetNewsSuccessPayload,
  TGetNewsSuccessAction,
  TGetNewsFailurePayload,
  TGetNewsFailureAction,
  TRequestPrevNewsAction,
  TRequestPrevNewsPayload
} from '../models';

export function requestNews(): TRequestNewsAction {
  return { type: REQUEST_NEWS }
}

export function getNewsSuccess(payload: TGetNewsSuccessPayload): TGetNewsSuccessAction {
  return { type: GET_NEWS_SUCCESS, payload }
}

export function getNewsFailure(payload: TGetNewsFailurePayload): TGetNewsFailureAction {
  return { type: GET_NEWS_FAILURE, payload }
}

export function requestPrevNews(payload: TRequestPrevNewsPayload): TRequestPrevNewsAction {
  return { type: REQUEST_PREV_NEWS, payload }
}