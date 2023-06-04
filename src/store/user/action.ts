// import { Dispatch } from "react";
import { Dispatch } from "redux";
import { UserActionTypes } from "./types";
export const fetchUser = (userId: number) => (dispatch: Dispatch) => {
  dispatch({ type: UserActionTypes.FETCH_USER_LOADING, id: userId });
};
