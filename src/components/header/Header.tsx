import { avatar } from '@assets';
import { ABOUT_PAGE_PATH, MAIN_PAGE_PATH, MY_EMAIL, MY_NAME } from '@consts';
import { FC, useState } from 'react';
import { Image, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './header.css';

import 'bootstrap/dist/css/bootstrap.min.css';

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
                    <Link to={ABOUT_PAGE_PATH} onClick={handleClose}>
                        <Image
                            src={avatar}
                            roundedCircle
                            width={40}
                            height={40}
                            className="me-3"
                        />
                    </Link>

                    <Offcanvas.Title as={'div'}>
                        <div>{MY_NAME}</div>
                        <div>{MY_EMAIL}</div>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="me-auto">
                        <Nav.Link
                            as={Link}
                            to={ABOUT_PAGE_PATH}
                            onClick={handleClose}
                        >
                            Обо мне
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to={MAIN_PAGE_PATH}
                            onClick={handleClose}
                        >
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
