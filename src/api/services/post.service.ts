import $api from "../http";
import { AxiosResponse } from "axios";
import { IPost } from "../../types/post.interface";
import IComment from "../../types/comment.interface";
import { IPostRequestParams } from "../../types/post.interface";
const baseUrl = "posts";

export const postService = {
  getPosts: async (
    params: IPostRequestParams
  ): Promise<AxiosResponse<IPost>> => {
    const id = params.userId ? `/?userId=${params.userId}` : "";
    const res = await $api.get<IPost>(
      `${baseUrl}/${id}?_limit=10&_page=${params.page || 1}&title_like=${
        params.title || ""
      }`
    );
    return res;
  },
  getPostComments: async (
    postId: number
  ): Promise<AxiosResponse<IComment[]>> => {
    return await $api.get<IComment[]>(`${baseUrl}/${postId}/comments`);
  },
};
