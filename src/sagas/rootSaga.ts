import { fecthPostWatcher } from "./post/postSaga";

export default function* rootSaga() {
  yield fecthPostWatcher();
}

export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
