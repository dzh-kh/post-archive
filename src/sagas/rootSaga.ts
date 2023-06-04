import { postWatcher } from "./post/postSaga";
import { userWatcher } from "./post/userSaga";
import { commentWatcher } from "./post/commentSaga";
import { fork } from "redux-saga/effects";

export default function* rootSaga() {
  yield fork(postWatcher);
  yield fork(userWatcher);
  yield fork(commentWatcher);
}

export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
