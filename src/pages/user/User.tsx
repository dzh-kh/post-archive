import ErrorToast from '@components/errorToast/ErrorToast';
import Loader from '@components/loader/Loader';
import Posts from '@components/posts/Posts';
import { useTypedSelector } from '@hooks/useTypedSelector';
import { fetchUser } from '@store/user/action';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import UserInfo from './UserInfo';

type Props = {};

const User = (props: Props) => {
    const [pageQuery, setPageQuery] = useState(1);

    const { id } = useParams();
    const { isLoading, user, error } = useTypedSelector((state) => state.user);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUser(Number(id)));
    }, [id]);

    if (isLoading) return <Loader />;

    return (
        <Row className="gy-5">
            {error && <ErrorToast error={error} />}
            <UserInfo user={user} />
            <Posts
                page={pageQuery}
                setPage={setPageQuery}
                userId={Number(id)}
            />
        </Row>
    );
};

export default React.memo(User);
