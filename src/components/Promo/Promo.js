import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col } from 'react-bootstrap';
import './Promo.css'
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const Promo = () => {
    return (
        <section className="promo">
            <Container>
                <Row className="align-items-center flex-container">
                    <Col md={8} className="flex-item">
                        <h1>Check our <strong>promo</strong> <br /> video!</h1>
                        <p>Taste it now with our online order!</p>
                        <button className="btnLg animateBtn">Order Now</button>
                    </Col>
                    <Col md={4} className="flex-item">
                        <button className="playBtn"><FontAwesomeIcon icon={faPlay}/></button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Promo;