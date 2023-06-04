import IComment from "../../types/comment.interface";

export interface CommentState {
  isLoading: boolean;
  error: string;
  comments: IComment[] | [];
}

export enum CommentActionTypes {
  FETCH_COMMENTS_LOADING = "FETCH_COMMENTS_LOADING",
  FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS",
  FETCH_COMMENTS_ERROR = "FETCH_COMMENTS_ERROR",
  RESET_COMMENTS_STORE = "RESET_COMMENTS_STORE",
}

interface fetchCommentSuccess {
  type: CommentActionTypes.FETCH_COMMENTS_SUCCESS;
  payload: {
    comments: IComment[];
  };
}

interface fetchCommentLoading {
  type: CommentActionTypes.FETCH_COMMENTS_LOADING;
}
interface fetchCommentError {
  type: CommentActionTypes.FETCH_COMMENTS_ERROR;
  payload: string;
}

interface resetCommentStore {
  type: CommentActionTypes.RESET_COMMENTS_STORE;
}

export type CommentAction =
  | fetchCommentError
  | fetchCommentLoading
  | fetchCommentSuccess
  | resetCommentStore;
