import {
  REQUEST_NEWS,
  GET_NEWS_SUCCESS,
  GET_NEWS_FAILURE,
  REQUEST_PREV_NEWS
} from '../actions/actionTypes';
import { TNewsState, TAction } from '../models';

const initialState: TNewsState = {
  news: [],
  loading: false,
  error: null
}

export default function newsReducer(state: TNewsState = initialState, action: TAction): TNewsState {
  switch (action.type) {
    case REQUEST_NEWS:
      return { ...state, loading: true, error: null };
    case GET_NEWS_SUCCESS:
      return { ...state, news: [...state.news, ...action.payload], loading: false, error: null };
    case GET_NEWS_FAILURE: {
      const { error } = action.payload;
      return { ...state, loading: true, error };
    }
    case REQUEST_PREV_NEWS:
      return { ...state, loading: true, error: null };
    default:
      return state;
  }
}