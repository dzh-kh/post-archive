import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import postReducer from "./post/reducer";
import rootSaga from "../sagas/rootSaga";
import thunk from "redux-thunk";

import createSagaMiddleware from "redux-saga";

const sagaMiddlware = createSagaMiddleware();

const rootReducer = combineReducers({ post: postReducer });

export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddlware, thunk)
);

sagaMiddlware.run(rootSaga);

export type RootState = ReturnType<typeof rootReducer>;
