import IUser from '@types1/user.interface';

export interface UserState {
    isLoading: boolean;
    error: string;
    user: IUser | null;
}

export enum UserActionTypes {
    FETCH_USER_REQUEST = 'FETCH_USER_REQUEST',
    FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS',
    FETCH_USER_ERROR = 'FETCH_USER_ERROR',
}

interface fetchUserSuccess {
    type: UserActionTypes.FETCH_USER_SUCCESS;
    payload: IUser;
}

export interface fetchUserRequestAction {
    type: UserActionTypes.FETCH_USER_REQUEST;
    payload: number;
}
interface fetchUserError {
    type: UserActionTypes.FETCH_USER_ERROR;
    payload: string;
}

export type UserAction =
    | fetchUserError
    | fetchUserRequestAction
    | fetchUserSuccess;
