import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../../../Images/logo.png';
import logo2 from '../../../Images/logo2.png'

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center pb-5">
                    <Col md={3}>
                        <img src={`${logo}`} alt="" className="fLogo"/>
                    </Col>
                    <Col md={6}>
                        <h5>Subscribe Us!</h5>
                        <form action="#">
                            <div className="inputGroup">
                                <input type="text" placeholder="Enter your email"/>
                                <button type="submit" className="viewBtn">Subscribe</button>
                            </div>
                        </form>
                        <h5>Social Media</h5>
                        <ul className="socialIcons">
                            <li>
                                <Link to="/" className="facebook"><FontAwesomeIcon icon={faFacebook}/></Link>
                            </li>
                            <li>
                                <Link to="/" className="google"><FontAwesomeIcon icon={faGoogle}/></Link>
                            </li>
                            <li>
                                <Link to="/" className="twitter"><FontAwesomeIcon icon={faTwitter}/></Link>
                            </li>
                            <li>
                                <Link to="/" className="youtube"><FontAwesomeIcon icon={faYoutube}/></Link>
                            </li>
                            <li>
                                <Link to="/" className="instagram"><FontAwesomeIcon icon={faInstagram}/></Link>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <div className="footerBottom">
                    <span>Powered by</span>
                    <img src={`${logo2}`} alt="" />
                </div>
            </Container>
        </footer>
    );
};

export default Footer;