import ErrorToast from '@components/errorToast/ErrorToast';
import { useTypedSelector } from '@hooks/useTypedSelector';
import { fetchPosts, resetStore } from '@store/post/actions';
import React, { FC } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Loader from '../loader/Loader';

import PostItem from './PostItem';

type Props = { title?: string; page: number; setPage: any; userId?: number };

const Posts: FC<Props> = ({ userId, title = '', page, setPage }) => {
    const { posts, isLoading, totalCount, error } = useTypedSelector(
        (state) => state.post,
    );
    const dispatch = useDispatch();
    useEffect(() => {
        const scrollHandler = (e: any) => {
            if (
                totalCount > posts.length &&
                document.documentElement.scrollHeight -
                    window.innerHeight -
                    e.target.documentElement.scrollTop <=
                    100 &&
                !isLoading
            ) {
                setPage(page + 1);
            }
        };
        document.addEventListener('scroll', scrollHandler);
        return () => {
            document.removeEventListener('scroll', scrollHandler);
        };
    }, [isLoading]);

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            dispatch(resetStore());
            dispatch(fetchPosts({ page, title, userId }));
        }, 500);

        return () => {
            clearTimeout(delayDebounceFn);
            dispatch(resetStore());
        };
    }, [title]);

    useEffect(() => {
        if (!isLoading) dispatch(fetchPosts({ page, title, userId }));
    }, [page]);

    const postList = posts.map((post) => {
        return <PostItem key={post.id} post={post} />;
    });
    return (
        <div>
            {postList}
            {error && <ErrorToast error={error} />}
            {isLoading && <Loader />}
        </div>
    );
};

export default React.memo(Posts);
