import { UserActionTypes } from "./types";

export const fetchUser = (userId: number) => ({
  type: UserActionTypes.FETCH_USER_LOADING,
  id: userId,
});
