import React from 'react';
import FeaturedPd from '../components/featuredPd/FeaturedPd';
import Header from '../components/header/Header';
import Promo from '../components/Promo/Promo';
import Review from '../components/review/Review';
import Footer from '../components/shared/footer/Footer';
import SlideMenu from '../components/slideMenu/SlideMenu';
import Steps from '../components/steps/Steps';

const Home = () => {
    return (
        <main style={{background: '#282B2E'}}>
            <Header/>
            <FeaturedPd/>
            <SlideMenu/>
            <Review/>
            <Steps/>
            <Promo/>
            <Footer/>
        </main>
    );
};

export default Home;