import { postService } from '@services';
import { fetchPostsError, fetchPostsSuccess } from '@store/post/actions';
import { PostActionTypes, fetchPostRequestAction } from '@store/post/types';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga/effects';

export function* getPost(action: fetchPostRequestAction) {
    try {
        const { data, headers } = yield call(
            postService.getPosts,
            action.payload,
        );
        yield delay(500);
        yield put(fetchPostsSuccess(data, headers['x-total-count']));
    } catch (e: any) {
        yield put(fetchPostsError(e.message));
    }
}

export function* postWatcher(): Generator {
    yield all([takeLatest(PostActionTypes.FETCH_POSTS_REQUEST, getPost)]);
}
