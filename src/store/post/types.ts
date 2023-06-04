import IPost from "../../types/post.interface";

export interface PostState {
  isLoading: boolean;
  error: string;
  posts: IPost[] | [];
  totalCount: number;
}

export enum PostActionTypes {
  FETCH_POSTS_LOADING = "FETCH_POSTS_LOADING",
  FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS",
  FETCH_POSTS_ERROR = "FETCH_POSTS_ERROR",
  RESET_STORE = "RESET_STORE",
}

interface fetchPostSuccess {
  type: PostActionTypes.FETCH_POSTS_SUCCESS;
  payload: {
    posts: IPost[];
    totalCount: number;
  };
}

interface fetchPostLoading {
  type: PostActionTypes.FETCH_POSTS_LOADING;
}
interface fetchPostError {
  type: PostActionTypes.FETCH_POSTS_ERROR;
  payload: string;
}

interface resetStore {
  type: PostActionTypes.RESET_STORE;
}

export type PostAction =
  | fetchPostError
  | fetchPostLoading
  | fetchPostSuccess
  | resetStore;
