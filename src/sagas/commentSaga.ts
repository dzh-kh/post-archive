import { postService } from '@services';
import {
    fetchCommentsError,
    fetchCommentsSuccess,
} from '@store/comment/actions';
import {
    CommentActionTypes,
    fetchCommentRequestAction,
} from '@store/comment/types';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga/effects';

export function* fecthComments(action: fetchCommentRequestAction) {
    try {
        const { data } = yield call(
            postService.getPostComments,
            action.payload,
        );
        yield delay(500);
        yield put(fetchCommentsSuccess(data));
    } catch (e: any) {
        yield put(fetchCommentsError(e.message));
    }
}

export function* commentWatcher(): Generator {
    yield all([
        takeLatest(CommentActionTypes.FETCH_COMMENTS_REQUEST, fecthComments),
    ]);
}
