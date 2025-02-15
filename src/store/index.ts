import { legacy_createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import newsReducer from "../reducers/newsReducer";
import saga from "../sagas";

const reducer = combineReducers({ news: newsReducer });

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = compose(applyMiddleware(sagaMiddleware));

const store = legacy_createStore(
  reducer,
  undefined,
  composeEnhancers
)

sagaMiddleware.run(saga);

export default store;