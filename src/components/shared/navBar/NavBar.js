import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from "react-router-dom";
import './NavBar.css'
import logo from '../../../Images/logo.png'

const NavBar = () => {
    return (
        <div>
            <Navbar expand="lg" id="navBar">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Brand as={Link} to="/">
                        <img src={`${logo}`} alt="" />
                    </Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Item>
                                <Link to="/">Home</Link>
                            </Nav.Item>
                            <Nav.Item>
                               <Link to="/">About</Link> 
                            </Nav.Item>
                            <Nav.Item>
                                <Link to="menu">Menu</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to="/">Contact</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to="/">Book a table</Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;