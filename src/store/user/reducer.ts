import { UserState, UserAction, UserActionTypes } from "./types";

const initialState: UserState = {
  user: null,
  error: "",
  isLoading: false,
};

const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USER_LOADING:
      console.log("LOADING");
      return { ...state, isLoading: true };
    case UserActionTypes.FETCH_USER_SUCCESS:
      console.log("success");
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      };
    case UserActionTypes.FETCH_USER_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    default: {
      return state;
    }
  }
};

export default userReducer;
