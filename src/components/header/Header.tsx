import React, { FC, useState } from "react";
import "./header.css";
import { Image, Nav, Navbar, Offcanvas } from "react-bootstrap";
import avatar from "../../assets/avatar.png";
import "bootstrap/dist/css/bootstrap.min.css";

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
            className=""
          />
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
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
