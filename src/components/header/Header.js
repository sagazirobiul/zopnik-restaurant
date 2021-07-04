import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import NavBar from '../shared/navBar/NavBar';
import './Header.css'

const Header = () => {
    return (
        <section className="header">
            <NavBar/>
            <Container>
                <Row className="align-items-center headerRow">
                    <Col md={5} className="headerContent">
                        <h1>Best food in the city!</h1>
                        <h5>Taste it now with our online order!</h5>
                        <button className="btnLg animateBtn">Order Now</button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Header;