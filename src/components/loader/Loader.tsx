import React from "react";
import "./loader.css";
import { Row } from "react-bootstrap";
type Props = {};

const Loader = (props: Props) => {
  return (
    <Row className="justify-content-center p-2">
      <div className="lds-dual-ring"></div>
    </Row>
  );
};

export default Loader;
