import React from 'react';
import { Link } from 'react-router-dom'
import GoogleAuth from './GoogleAuth'
import {Navbar, Nav} from 'react-bootstrap'

const Header = () => {
    return (
        <React.Fragment>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Link to="/">
                    <Navbar.Brand>
                        Tutor
                    </Navbar.Brand>
                </Link>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link className="nav-link" to="/materials">
                            <Nav.Item> 
                                Materials
                            </Nav.Item>
                        </Link>
                        <Link className="nav-link" to="/forum">
                            <Nav.Item>
                                Forum
                            </Nav.Item>
                        </Link>
                        <GoogleAuth />
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </React.Fragment>
    );
}

export default Header;