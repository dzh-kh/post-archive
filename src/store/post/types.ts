import { IPost, IPostRequestParams } from '@types1/post.interface';

export interface PostState {
    isLoading: boolean;
    error: string;
    posts: IPost[] | [];
    totalCount: number;
}

export enum PostActionTypes {
    FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST',
    FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS',
    FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR',
    RESET_STORE = 'RESET_STORE',
}

interface fetchPostSuccessAction {
    type: PostActionTypes.FETCH_POSTS_SUCCESS;
    payload: {
        posts: IPost[];
        totalCount: number;
    };
}

export interface fetchPostRequestAction {
    type: PostActionTypes.FETCH_POSTS_REQUEST;
    payload: IPostRequestParams;
}
interface fetchPostErrorAction {
    type: PostActionTypes.FETCH_POSTS_ERROR;
    payload: string;
}

interface resetStoreAction {
    type: PostActionTypes.RESET_STORE;
}

export type PostAction =
    | fetchPostErrorAction
    | fetchPostRequestAction
    | fetchPostSuccessAction
    | resetStoreAction;
