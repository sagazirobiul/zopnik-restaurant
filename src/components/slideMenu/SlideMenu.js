import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import burger from '../../Images/burger.jpg'
import pizza from '../../Images/pizza.jpg'
import sushi from '../../Images/sushi.jpg'
import pasta from '../../Images/pasta.jpg'
import desserts from '../../Images/desserts.jpg'
import drinks from '../../Images/drinks.jpg'
import './SlideMenu.css'

const SlideMenu = () => {

    const slideData = [
        {name: 'burger',  img: burger, id: 1},
        {name: 'pizza',  img: pizza, id: 2},
        {name: 'sushi',  img: sushi, id: 3},
        {name: 'pasta',  img: pasta, id: 4},
        {name: 'desserts',  img: desserts, id: 5},
        {name: 'drinks',  img: drinks, id: 6},
    ]

    return (
        <div>
            <Swiper
                    pagination={{ clickable: true }}
                    navigation={true} 
                    slidesPerView={3}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    autoplay={{
                        delay: 300,
                        disableOnInteraction: false,
                    }}
                >
            
                {
                    slideData.map(({name, img, id}) => {
                        return(
                            <SwiperSlide key={id}>
                                <div className="slideImg">
                                    <img src={`${img}`} alt="" />
                                    <h4>{name}</h4>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </div>
    );
};

export default SlideMenu;