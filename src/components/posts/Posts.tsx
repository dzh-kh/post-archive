import React, { FC } from "react";
import PostItem from "./PostItem";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Loader from "../loader/Loader";
import { fetchPosts, resetStore } from "../../store/post/actions";

type Props = { title?: string; page: number; setPage: any; userId?: number };

const Posts: FC<Props> = ({ userId, title = "", page, setPage }) => {
  const { posts, isLoading, totalCount } = useTypedSelector(
    (state) => state.post
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
    document.addEventListener("scroll", scrollHandler);
    return () => document.removeEventListener("scroll", scrollHandler);
  }, [isLoading]);

  useEffect(() => {
    return () => {
      console.log(posts);
      console.log("reset");
      dispatch(resetStore());
    };
  }, [title]);
  console.log(posts);
  useEffect(() => {
    if (!isLoading) {
      dispatch(fetchPosts({ page, title, userId }));
    }
  }, [page, title]);

  const postList = posts.map((post) => {
    return <PostItem key={post.id} post={post} />;
  });
  return (
    <div>
      {postList}
      {isLoading && <Loader />}
    </div>
  );
};

export default React.memo(Posts);
