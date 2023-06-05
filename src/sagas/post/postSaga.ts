import { put, call, takeLatest, all } from "redux-saga/effects";
import { postService } from "../../api/services/post.service";
import { PostActionTypes } from "../../store/post/types";
import { delay } from "redux-saga/effects";

export function* fetchPost(action: any): Generator {
  try {
    const { data, headers } = yield call(postService.getPosts, action.payload);
    yield delay(500);
    yield put({
      type: PostActionTypes.FETCH_POSTS_SUCCESS,
      payload: { posts: data, totalCount: headers["x-total-count"] },
    });
  } catch (e: any) {
    yield put({ type: PostActionTypes.FETCH_POSTS_ERROR, payload: e.message });
  }
}

export function* postWatcher(): Generator {
  yield all([takeLatest(PostActionTypes.FETCH_POSTS_LOADING, fetchPost)]);
}
