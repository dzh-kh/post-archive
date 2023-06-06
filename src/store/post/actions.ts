import { IPost, IPostRequestParams } from '@types1/post.interface';

import { PostActionTypes } from './types';

export const fetchPosts = (params: IPostRequestParams) => ({
    type: PostActionTypes.FETCH_POSTS_REQUEST,
    payload: params,
});
export const resetStore = () => ({ type: PostActionTypes.RESET_STORE });

export const fetchPostsSuccess = (posts: IPost[], totalCount: number) => ({
    type: PostActionTypes.FETCH_POSTS_SUCCESS,
    payload: { posts, totalCount },
});

export const fetchPostsError = (error: string) => ({
    type: PostActionTypes.FETCH_POSTS_ERROR,
    payload: error,
});
