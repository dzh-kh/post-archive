import { put, call, takeLatest, all } from "redux-saga/effects";
import { postService } from "../../api/services/post.service";
import { CommentActionTypes } from "../../store/comment/types";
import { delay } from "redux-saga/effects";

export function* fecthComments(action: any): Generator {
  try {
    console.log(action);
    const { id } = action.payload;
    const { data } = yield call(postService.getPostComments, id);
    yield delay(500);
    yield put({
      type: CommentActionTypes.FETCH_COMMENTS_SUCCESS,
      payload: { comments: data },
    });
  } catch (e: any) {
    yield put({
      type: CommentActionTypes.FETCH_COMMENTS_ERROR,
      payload: e.message,
    });
  }
}

export function* commentWatcher(): Generator {
  yield all([
    takeLatest(CommentActionTypes.FETCH_COMMENTS_LOADING, fecthComments),
  ]);
}
