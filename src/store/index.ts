import {
    applyMiddleware,
    combineReducers,
    legacy_createStore as createStore,
} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from '../sagas/rootSaga';

import commentReducer from './comment/reducer';
import postReducer from './post/reducer';
import userReducer from './user/reducer';

const sagaMiddlware = createSagaMiddleware();

const rootReducer = combineReducers({
    post: postReducer,
    user: userReducer,
    comment: commentReducer,
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddlware));

sagaMiddlware.run(rootSaga);

export type RootState = ReturnType<typeof rootReducer>;
