import { CommentState, CommentAction, CommentActionTypes } from "./types";

const initialState: CommentState = {
  comments: { byId: {} },
  error: "",
  isLoading: false,
};

const commentReducer = (
  state = initialState,
  action: CommentAction
): CommentState => {
  switch (action.type) {
    case CommentActionTypes.RESET_COMMENTS_STORE:
      return { ...initialState };
    case CommentActionTypes.FETCH_COMMENTS_LOADING:
      return { ...state, isLoading: true };
    case CommentActionTypes.FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        comments: action.payload.comments,
      };
    case CommentActionTypes.FETCH_COMMENTS_ERROR:
      return { ...state, isLoading: false, error: action.payload };

    default: {
      return state;
    }
  }
};

export default commentReducer;
