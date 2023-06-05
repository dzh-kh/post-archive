import React, { useState, useEffect } from "react";
import UserInfo from "./UserInfo";
import Posts from "../../components/posts/Posts";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUser } from "../../store/user/action";
import Loader from "../../components/loader/Loader";
import { Row } from "react-bootstrap";

type Props = {};

const User = (props: Props) => {
  const [pageQuery, setPageQuery] = useState(1);

  const { id } = useParams();
  const { isLoading, user } = useTypedSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser(Number(id)));
  }, [id]);

  if (isLoading) return <Loader />;

  return (
    <Row className="gy-5">
      <UserInfo user={user} />
      <Posts page={pageQuery} setPage={setPageQuery} userId={Number(id)} />
    </Row>
  );
};

export default React.memo(User);
