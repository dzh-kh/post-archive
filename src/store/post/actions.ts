import { PostActionTypes } from "./types";
import { IPostRequestParams } from "../../types/post.interface";

export const fetchPosts = (params: IPostRequestParams) => ({
  type: PostActionTypes.FETCH_POSTS_LOADING,
  payload: params,
});
export const resetStore = () => ({ type: PostActionTypes.RESET_STORE });
