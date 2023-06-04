import { takeEvery, put, call } from "redux-saga/effects";
import { postService } from "../../api/services/post.service";
import { PostActionTypes } from "../../store/post/types";
import { delay } from "redux-saga/effects";

export function* fecthPostWorker(action: any): Generator {
  try {
    console.log(action);
    const { data, headers } = yield call(
      postService.getPosts,
      action.userId,
      action.page,
      action.title
    );
    yield delay(500);
    yield put({
      type: PostActionTypes.FETCH_POSTS_SUCCESS,
      payload: { posts: data, totalCount: headers["x-total-count"] },
    });
  } catch (e: any) {
    yield put({ type: PostActionTypes.FETCH_POSTS_ERROR, payload: e.message });
  }
}

export function* fecthPostWatcher(): Generator {
  yield takeEvery(PostActionTypes.FETCH_POSTS_LOADING, fecthPostWorker);
}

export function* fecthPostCommentsWorker(action: any): Generator {
  try {
    console.log(action);
    const { data, headers } = yield call(
      postService.getPosts,
      action.userId,
      action.offset,
      action.title
    );
    yield delay(500);
    yield put({
      type: PostActionTypes.FETCH_POSTS_SUCCESS,
      payload: { posts: data, totalCount: headers["x-total-count"] },
    });
  } catch (e: any) {
    yield put({ type: PostActionTypes.FETCH_POSTS_ERROR, payload: e.message });
  }
}

export function* fecthPostCommentsWatcher(): Generator {
  yield takeEvery(PostActionTypes.FETCH_POSTS_LOADING, fecthPostWorker);
}
