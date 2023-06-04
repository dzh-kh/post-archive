import React, { FC, useEffect, useState } from "react";
import CommentItem from "./CommentItem";
import IComment from "../../types/comment.interface";
import { postService } from "../../api/services/post.service";
import Loader from "../loader/Loader";

type Props = { postId: number };

const Comments: FC<Props> = ({ postId }) => {
  const [comments, setComments] = useState<IComment[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      postService
        .getPostComments(postId)
        .then((res) => setComments(res.data))
        .catch((e) => console.log(e))
        .finally(() => setIsLoading(false));
    }, 500);
  }, [postId]);
  const commentList = comments.map((comm) => {
    return <CommentItem key={comm.id} comment={comm} />;
  });
  return (
    <div className="p-5">
      {isLoading && <Loader />}
      {commentList.length && !isLoading ? commentList : null}
      {!commentList.length && !isLoading
        ? commentList && "No comment yet"
        : null}
    </div>
  );
};

export default Comments;
