import React, { FC, useEffect } from "react";
import { fetchUser } from "../../store/user/action";
import { Row, Col, Image } from "react-bootstrap";
import avatar from "../../assets/avatar.png";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";

type Props = { id: number };

const UserInfo: FC<Props> = ({ id }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "FETCH_USER_LOADING", id });
  }, [id]);
  const { user } = useTypedSelector((state) => state.user);
  //   const { email, website, name, phone, company, address } = user;
  return (
    <div>
      <Row>
        <Col lg={5}>
          <h3>{user?.name}</h3>
          <Image width={400} height={400} src={avatar} roundedCircle />
        </Col>
        <Col lg={7}>
          <Row>
            <Col>
              <h5>Contacts</h5>
              <div>
                <ul>
                  <li>Email: {user?.email}</li>
                  <li>Website: {user?.website}</li>
                  <li>Phone: {user?.phone}</li>
                </ul>
              </div>
            </Col>
            <Col>
              <h5>Company</h5>
              <div>{user?.company?.name}</div>
              <div>{user?.company?.catchPhrase}</div>
              <div>{user?.company?.bs}</div>
            </Col>
            <Col>
              <h5>Address</h5>
              <div>{user?.address?.street}</div>
              <div>{user?.address?.suite}</div>
              <div>{user?.address?.city}</div>
              <div>{user?.address?.zipcode}</div>
              <div>{user?.address?.geo.lat}</div>
              <div>{user?.address?.geo?.lng}</div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default UserInfo;
