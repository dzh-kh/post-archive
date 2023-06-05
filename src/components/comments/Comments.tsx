import { FC, useEffect } from "react";
import CommentItem from "./CommentItem";
import Loader from "../loader/Loader";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { fetchComments } from "../../store/comment/actions";
import { useDispatch } from "react-redux";

type Props = { postId: number };

const Comments: FC<Props> = ({ postId }) => {
  const dispatch = useDispatch();
  const { comments, isLoading } = useTypedSelector((state) => state.comment);
  const ownComments = comments.byId[postId];
  useEffect(() => {
    dispatch(fetchComments(postId));
  }, [postId]);
  const commentList = ownComments
    ? ownComments.map((comm) => {
        return <CommentItem key={comm.id} comment={comm} />;
      })
    : [];
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
