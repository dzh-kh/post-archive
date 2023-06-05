import React, { FC, useEffect, useRef } from "react";
import { fetchUser } from "../../store/user/action";
import { Row, Col, Image } from "react-bootstrap";
import avatar from "../../assets/avatar.png";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import "./user.css";
import Loader from "../../components/loader/Loader";

type Props = { id: number };

const UserInfo: FC<Props> = ({ id }) => {
  const isFirstRender = useRef(true);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isFirstRender) {
      console.log("again");
      // dispatch(fetchUser(id));
      isFirstRender.current = false;
    }
  }, [id]);
  // console.log("redirect");
  const { user } = useTypedSelector((state) => state.user);
  console.log;
  return (
    <div>
      <Row className="justify-content-between">
        <Col lg={12}>
          {" "}
          <h3>{user?.name}</h3>
        </Col>
        <Col lg={5}>
          <Image width={250} height={250} src={avatar} roundedCircle />
        </Col>
        <Col lg={7}>
          <Row className="flex-column">
            <Col className="info-card">
              <h5>Contacts</h5>
              <div>
                <ul>
                  <li>Email: {user?.email}</li>
                  <li>Website: {user?.website}</li>
                  <li>Phone: {user?.phone}</li>
                </ul>
              </div>
            </Col>
            <Col className="info-card">
              <h5>Company</h5>
              <ul>
                <li>{user?.company?.name}</li>
                <li>{user?.company?.catchPhrase}</li>
                <li>{user?.company?.bs}</li>
              </ul>
            </Col>
            <Col className="info-card">
              <h5>Location</h5>
              <ul>
                <li>
                  {" "}
                  Address:
                  {user?.address?.city} {user?.address?.street}{" "}
                  {user?.address?.suite}
                </li>
                <li>Zipcode: {user?.address?.zipcode}</li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default React.memo(UserInfo);
