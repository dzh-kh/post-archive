export interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface IPostRequestParams {
    userId?: number;
    page: number;
    title: string;
}
