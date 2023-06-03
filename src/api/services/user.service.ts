import $api from "../http";
import { AxiosResponse } from "axios";
import IUser from "../../types/user.interface";

const baseUrl = "users";

export const postService = {
  getUserById: async (userId: number): Promise<AxiosResponse<IUser>> => {
    const res = await $api.get<IUser>(`${baseUrl}?id=${userId}`);
    return res;
  },
};
