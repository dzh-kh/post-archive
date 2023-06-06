import IUser from '@types1/user.interface';
import { AxiosResponse } from 'axios';

import $api from '../http';

const baseUrl = 'users';

export const userService = {
    getUserById: async (userId: number): Promise<AxiosResponse<IUser>> => {
        const res = await $api.get<IUser>(`${baseUrl}?id=${userId}`);
        return res;
    },
};
export default userService;
