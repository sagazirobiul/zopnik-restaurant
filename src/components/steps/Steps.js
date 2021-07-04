import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col } from 'react-bootstrap';
import { faBoxOpen, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faCreditCard } from '@fortawesome/free-regular-svg-icons';
import './Steps.css'

const Steps = () => {

    const steps = [
        {title: 'Pick a dish', icon: faShoppingCart, id: 1},
        {title: 'Make a payment', icon: faCreditCard, id: 2},
        {title: 'Receive your food!', icon: faBoxOpen, id: 3},
    ]

    return (
        <section class="steps">
            <Container>
                <Row>
                    {
                        steps.map(({title, icon, id}) =>{
                            return(
                                <Col md={4} key={id}>
                                    <div className="stepDetails d-flex" >
                                        <div className="stepIcon">
                                            <FontAwesomeIcon icon={icon}/>
                                        </div>
                                        <div>
                                            <h4>{title}</h4>
                                            <p>Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam.</p>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </section>
    );
};

export default Steps;