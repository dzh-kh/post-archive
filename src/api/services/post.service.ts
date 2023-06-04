import $api from "../http";
import { AxiosResponse } from "axios";
import IPost from "../../types/post.interface";
import IComment from "../../types/comment.interface";

const baseUrl = "posts";

export const postService = {
  getPosts: async (
    userId?: number,
    page = 1,
    title = ""
  ): Promise<AxiosResponse<IPost>> => {
    const id = userId ? `/?userId=${userId}` : "";
    const res = await $api.get<IPost>(
      `${baseUrl}/${id}?_limit=10&_page=${page}&title_like=${title}`
    );
    return res;
  },
  getPostComments: async (
    postId: number
  ): Promise<AxiosResponse<IComment[]>> => {
    return await $api.get<IComment[]>(`${baseUrl}/${postId}/comments`);
  },
};
