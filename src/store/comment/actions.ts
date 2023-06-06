import IComment from '@types1/comment.interface';

import { CommentActionTypes } from './types';

export const fetchComments = (postId: number) => ({
    type: CommentActionTypes.FETCH_COMMENTS_REQUEST,
    payload: postId,
});

export const fetchCommentsSuccess = (comments: IComment[]) => ({
    type: CommentActionTypes.FETCH_COMMENTS_SUCCESS,
    payload: comments,
});

export const fetchCommentsError = (error: string) => ({
    type: CommentActionTypes.FETCH_COMMENTS_ERROR,
    payload: error,
});
