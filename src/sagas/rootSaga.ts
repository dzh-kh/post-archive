import { fork } from 'redux-saga/effects';

import { commentWatcher } from './commentSaga';
import { postWatcher } from './postSaga';
import { userWatcher } from './userSaga';

export default function* rootSaga() {
    yield fork(postWatcher);
    yield fork(userWatcher);
    yield fork(commentWatcher);
}

export const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
