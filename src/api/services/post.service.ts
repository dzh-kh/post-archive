import $api from "../http";
import { AxiosResponse } from "axios";
import IPost from "../../types/post.interface";
import IComment from "../../types/comment.interface";

const baseUrl = "posts";

export const postService = {
  getAllPosts: async (): Promise<AxiosResponse<IPost>> => {
    return await $api.get(`${baseUrl}`);
  },
  getUserPosts: async (userId: number): Promise<AxiosResponse<IPost>> => {
    return await $api.get<IPost>(`${baseUrl}/?userId=${userId}`);
  },

  getPostComments: async (postId: number): Promise<AxiosResponse<IComment>> => {
    return await $api.get<IComment>(`${baseUrl}/${postId}/comments`);
  },
};
