import { PostState, PostAction, PostActionTypes } from "./types";

const initialState: PostState = {
  posts: [],
  error: "",
  isLoading: false,
  totalCount: 0,
};

const postReducer = (state = initialState, action: PostAction): PostState => {
  switch (action.type) {
    case PostActionTypes.RESET_STORE:
      return { ...initialState };
    case PostActionTypes.FETCH_POSTS_LOADING:
      console.log("LOADING");
      return { ...state, isLoading: true };
    case PostActionTypes.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        posts: [...state.posts, ...action.payload.posts],
        totalCount: action.payload.totalCount,
      };
    case PostActionTypes.FETCH_POSTS_ERROR:
      return { ...state, isLoading: false, error: action.payload };

    default: {
      return state;
    }
  }
};

export default postReducer;
