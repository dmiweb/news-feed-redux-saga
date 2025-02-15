import {
  REQUEST_NEWS,
  GET_NEWS_SUCCESS,
  GET_NEWS_FAILURE,
  REQUEST_PREV_NEWS
} from "../actions/actionTypes";
import { TPost } from "./typePost";
import { TArticle } from "./typeArticle";
import { TVideo } from "./typeVideo";

export type { TPost, TArticle, TVideo };
export type TNews = TPost | TArticle | TVideo;


export type TGetNewsSuccessPayload = TNews[];
export type TGetNewsFailurePayload = { error: string };
export type TRequestPrevNewsPayload = { id: number };

export type TRequestNewsAction = {
  type: typeof REQUEST_NEWS;
}

export type TGetNewsSuccessAction = {
  type: typeof GET_NEWS_SUCCESS;
  payload: TGetNewsSuccessPayload;
}

export type TGetNewsFailureAction = {
  type: typeof GET_NEWS_FAILURE;
  payload: TGetNewsFailurePayload;
}

export type TRequestPrevNewsAction = {
  type: typeof REQUEST_PREV_NEWS;
  payload: TRequestPrevNewsPayload;
}

export type TAction =
  | TRequestNewsAction
  | TGetNewsSuccessAction
  | TGetNewsFailureAction
  | TRequestPrevNewsAction

export type TNewsState = {
  news: TNews[];
  loading: boolean;
  error: string | null;
}

export type TRootState = {
  news: TNewsState;
};