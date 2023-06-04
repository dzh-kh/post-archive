import React, { FC, useState } from "react";
import "./header.css";
import { Image, Nav, Navbar, Offcanvas } from "react-bootstrap";
import avatar from "../../assets/avatar.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { MY_EMAIL, MY_NAME } from "../../consts";
import { Link } from "react-router-dom";

type Props = {};

const Header: FC<Props> = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Navbar
      className="fixed-top mb-3"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Image
            src={avatar}
            roundedCircle
            width={40}
            height={40}
            className="me-3"
          />
          <Offcanvas.Title as={"div"}>
            <div>{MY_NAME}</div>
            <div>{MY_EMAIL}</div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/about">
              Обо мне
            </Nav.Link>
            <Nav.Link as={Link} to="/">
              Главная
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
      <Navbar.Toggle
        className="menu-toggle"
        onClick={handleShow}
        aria-controls="responsive-navbar-nav"
      />
    </Navbar>
  );
};

export default Header;
