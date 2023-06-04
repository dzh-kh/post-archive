import { Dispatch } from "react";
import { PostAction, PostActionTypes } from "./types";

export const fetchPosts =
  (postId: number) => async (dispatch: Dispatch<PostAction>) => {
    console.log("lol");
    dispatch({
      type: PostActionTypes.FETCH_POSTS_LOADING,
    });
  };

export const resetStore = () => ({ type: PostActionTypes.RESET_STORE });
