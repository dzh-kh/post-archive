import React, { FC } from "react";
import { Row, Col, Image } from "react-bootstrap";
import avatar from "../../assets/images/avatar.png";
import "./user.css";
import IUser from "../../types/user.interface";

type Props = { user: IUser | null };

const UserInfo: FC<Props> = ({ user }) => {
  return (
    <div>
      <Row className="justify-content-between">
        <Col lg={5} className="info-card__left">
          <h3>{user?.name}</h3>
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
