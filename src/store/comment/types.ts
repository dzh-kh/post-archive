import IComment from '@types1/comment.interface';

export interface CommentState {
    loadingPostId: null | number;
    error: string;
    comments: {
        byId: { [key: string]: IComment[] };
    };
}

export enum CommentActionTypes {
    FETCH_COMMENTS_REQUEST = 'FETCH_COMMENTS_REQUEST',
    FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS',
    FETCH_COMMENTS_ERROR = 'FETCH_COMMENTS_ERROR',
}

interface fetchCommentSuccessAction {
    type: CommentActionTypes.FETCH_COMMENTS_SUCCESS;
    payload: IComment[];
}

export interface fetchCommentRequestAction {
    type: CommentActionTypes.FETCH_COMMENTS_REQUEST;
    payload: number;
}
interface fetchCommentErrorAction {
    type: CommentActionTypes.FETCH_COMMENTS_ERROR;
    payload: string;
}

export type CommentAction =
    | fetchCommentErrorAction
    | fetchCommentRequestAction
    | fetchCommentSuccessAction;
