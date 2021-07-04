import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Container, Row } from 'react-bootstrap';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import reviewBg from '../../Images/r-bg.png';
import './Review.css'

const Review = () => {
    return (
        <section className="review">
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="stars">
                            <span><FontAwesomeIcon icon={faStar}/></span>
                            <span><FontAwesomeIcon icon={faStar}/></span>
                            <span><FontAwesomeIcon icon={faStar}/></span>
                            <span><FontAwesomeIcon icon={faStar}/></span>
                            <span style={{color: '#7E8082'}}><FontAwesomeIcon icon={faStar}/></span>
                        </div>
                        <h1>The best food in London!</h1>
                        <p>Donec a eros metus. Vivamus volutpat leo dictum risus ullamcorper condimentum. Cras sollicitudin varius condimentum. Praesent a dolor sem....</p>
                        <div className="review1">
                            <div className="googleReview">
                                <div className="userStars">
                                    <span><FontAwesomeIcon icon={faStar}/></span>
                                    <span><FontAwesomeIcon icon={faStar}/></span>
                                    <span><FontAwesomeIcon icon={faStar}/></span>
                                    <span><FontAwesomeIcon icon={faStar}/></span>
                                    <span style={{color: '#7E8082'}}><FontAwesomeIcon icon={faStar}/></span>
                                </div>
                                <h4>It’ was amazing feeling for my belly!</h4>
                            </div>
                            <div className="userInfo">
                                <img src="https://assets.suelo.pl/soup/img/avatars/avatar02.jpg" alt="" />
                                <span className="text-white"> Mark Johnson, <span className="darkColor">Google</span></span>
                            </div>
                        </div>
                        <div className="review2">
                            <div className="linkedInReview">
                                <div className="userStars">
                                    <span><FontAwesomeIcon icon={faStar}/></span>
                                    <span><FontAwesomeIcon icon={faStar}/></span>
                                    <span><FontAwesomeIcon icon={faStar}/></span>
                                    <span><FontAwesomeIcon icon={faStar}/></span>
                                    <span style={{color: '#7E8082'}}><FontAwesomeIcon icon={faStar}/></span>
                                </div>
                                <h4>It’ was amazing feeling for my belly!</h4>
                            </div>
                            <div className="userInfo">
                                <img src="https://assets.suelo.pl/soup/img/avatars/avatar01.jpg" alt="" />
                                <span className="text-white"> Mark Johnson, <span className="darkColor">Google</span></span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Review;