import { takeEvery, put, call } from "redux-saga/effects";
import { userService } from "../../api/services/user.service";
import { UserActionTypes } from "../../store/user/types";
import { delay } from "redux-saga/effects";

export function* fetchUser(action: any): Generator {
  try {
    const { data } = yield call(userService.getUserById, action.id);
    yield delay(500);
    yield put({
      type: UserActionTypes.FETCH_USER_SUCCESS,
      payload: { user: data[0] },
    });
  } catch (e: any) {
    yield put({ type: UserActionTypes.FETCH_USER_ERROR, payload: e.message });
  }
}

export function* userWatcher(): Generator {
  yield takeEvery(UserActionTypes.FETCH_USER_LOADING, fetchUser);
}
