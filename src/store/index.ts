import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import postReducer from "./post/reducer";
import userReducer from "./user/reducer";
import commentReducer from "./comment/reducer";
import rootSaga from "../sagas/rootSaga";

import createSagaMiddleware from "redux-saga";

const sagaMiddlware = createSagaMiddleware();

const rootReducer = combineReducers({
  post: postReducer,
  user: userReducer,
  comment: commentReducer,
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddlware));

sagaMiddlware.run(rootSaga);

export type RootState = ReturnType<typeof rootReducer>;
