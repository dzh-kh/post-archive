import ErrorToast from '@components/errorToast/ErrorToast';
import { useTypedSelector } from '@hooks/useTypedSelector';
import { fetchComments } from '@store/comment/actions';
import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Loader from '../loader/Loader';

import CommentItem from './CommentItem';

type Props = { postId: number };

const Comments: FC<Props> = ({ postId }) => {
    const dispatch = useDispatch();
    const { comments, loadingPostId, error } = useTypedSelector(
        (state) => state.comment,
    );
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
            {loadingPostId === postId && <Loader />}
            {commentList.length && loadingPostId !== postId
                ? commentList
                : null}
            {!commentList.length && loadingPostId !== postId
                ? commentList && 'No comment yet'
                : null}
            {error && <ErrorToast error={error} />}
        </div>
    );
};

export default Comments;
