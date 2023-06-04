import { CommentActionTypes } from "./types";

export const fetchComments = (postId: number) => ({
  type: CommentActionTypes.FETCH_COMMENTS_LOADING,
  payload: { id: postId },
});

export const resetStore = () => ({
  type: CommentActionTypes.RESET_COMMENTS_STORE,
});
