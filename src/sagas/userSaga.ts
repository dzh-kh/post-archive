import { userService } from '@services';
import { fetchUserError, fetchUserSuccess } from '@store/user/action';
import { UserActionTypes, fetchUserRequestAction } from '@store/user/types';
import { call, put, takeEvery } from 'redux-saga/effects';
import { delay } from 'redux-saga/effects';

export function* fetchUser(action: fetchUserRequestAction) {
    try {
        const { data } = yield call(userService.getUserById, action.payload);
        yield delay(500);
        yield put(fetchUserSuccess(data[0]));
    } catch (e: any) {
        yield put(fetchUserError(e.message));
    }
}

export function* userWatcher(): Generator {
    yield takeEvery(UserActionTypes.FETCH_USER_REQUEST, fetchUser);
}
