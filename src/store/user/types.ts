import IUser from "../../types/user.interface";

export interface UserState {
  isLoading: boolean;
  error: string;
  user: IUser | null;
}

export enum UserActionTypes {
  FETCH_USER_LOADING = "FETCH_USER_LOADING",
  FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS",
  FETCH_USER_ERROR = "FETCH_USER_ERROR",
}

interface fetchUserSuccess {
  type: UserActionTypes.FETCH_USER_SUCCESS;
  payload: {
    user: IUser;
    totalCount: number;
  };
}

interface fetchUserLoading {
  type: UserActionTypes.FETCH_USER_LOADING;
}
interface fetchUserError {
  type: UserActionTypes.FETCH_USER_ERROR;
  payload: string;
}

export type UserAction = fetchUserError | fetchUserLoading | fetchUserSuccess;
