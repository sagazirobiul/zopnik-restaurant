import React from 'react';
import { Col, Row } from 'react-bootstrap';
import p1 from '../../Images/p1.jpg'
import p2 from '../../Images/p2.jpg'
import p3 from '../../Images/p3.jpg'
import './FeaturedPd.css'

const FeaturedPd = () => {

    const productsImages = [
        {img: p1, id: 1},
        {img: p2, id: 2},
        {img: p3, id: 3}
    ]

    return (
        <section className="container featurePd">
            <h2>Featured Products</h2>
            <Row>
                {
                    productsImages.map(({ img, id }) =>{
                        return(
                            <Col md={4}>
                                <div className="productCard" key={id}>
                                    <div className="cardImg">
                                        <img src={`${img}`} alt="" />
                                    </div>
                                    <div className="productCardDes">
                                        <h5>Beef Burger</h5>
                                        <p>Beef, cheese, potato, onion, fries</p>
                                        <div className="productPrice">
                                            <span>from <span className="text-white">₹ 9.00</span></span>
                                            <button className="animateBtn">Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        )
                    })
                }
                <div className="text-center">
                    <button className="viewBtn">View our menu</button>
                </div>
            </Row>
        </section>
    );
};

export default FeaturedPd;