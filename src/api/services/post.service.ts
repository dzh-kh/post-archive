import IComment from '@types1/comment.interface';
import { IPost } from '@types1/post.interface';
import { IPostRequestParams } from '@types1/post.interface';
import { AxiosResponse } from 'axios';

import $api from '../http';

const baseUrl = 'posts';

export const postService = {
    getPosts: async (
        params: IPostRequestParams,
    ): Promise<AxiosResponse<IPost>> => {
        const id = params.userId ? `/?userId=${params.userId}` : '/?';
        const res = await $api.get<IPost>(
            `${baseUrl}/${id}&_limit=10&_page=${params.page || 1}&title_like=${
                params.title || ''
            }`,
        );
        return res;
    },
    getPostComments: async (
        postId: number,
    ): Promise<AxiosResponse<IComment[]>> => {
        return await $api.get<IComment[]>(`${baseUrl}/${postId}/comments`);
    },
};
