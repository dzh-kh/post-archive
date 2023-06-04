import { FC } from "react";
import PostItem from "./PostItem";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Loader from "../loader/Loader";

type Props = { title: string; page: number; setPage: any };

const Posts: FC<Props> = ({ title, page, setPage }) => {
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
      dispatch({ type: "RESET_STORE" });
    };
  }, [title]);

  useEffect(() => {
    if (!isLoading) {
      dispatch({ type: "FETCH_POSTS_LOADING", page, title });
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

export default Posts;
