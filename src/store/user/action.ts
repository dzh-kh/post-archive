import IUser from '@types1/user.interface';

import { UserActionTypes } from './types';

export const fetchUser = (id: number) => ({
    type: UserActionTypes.FETCH_USER_REQUEST,
    payload: id,
});

export const fetchUserSuccess = (user: IUser) => ({
    type: UserActionTypes.FETCH_USER_SUCCESS,
    payload: user,
});

export const fetchUserError = (error: string) => ({
    type: UserActionTypes.FETCH_USER_ERROR,
    payload: error,
});
