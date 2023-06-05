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
  const { isLoading } = useTypedSelector((state) => state.user);
  useEffect(() => {
    console.log("ISLOADING: " + isLoading);
  }, [isLoading]);
  if (isLoading) return <Loader />;

  return (
    <Row className="gy-5">
      <UserInfo id={id} />
      <Posts page={pageQuery} setPage={setPageQuery} userId={Number(id)} />
    </Row>
  );
};

export default User;
