import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {moviesActions} from "../../redux";


import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './PopularList.css'
import {PopularListCard} from "../PopularListCard/PopularListCard";

import {Autoplay} from "swiper";


const PopularList = () => {

    const dispatch = useDispatch();
    const {popular} = useSelector(state => state.movies);

    useEffect(() => {
        dispatch(moviesActions.getPopular())
    }, [dispatch])


    return (
        <div className={'swiper-Father'}>
            <div className={'top-title'}><h3>Popular movies:</h3></div>

            <Swiper
                centeredSlides={false}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 30
                    },
                    670: {
                        slidesPerView: 2,
                        spaceBetween: 10
                    },
                    890: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1020: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    },
                    1021: {
                        slidesPerView: 4,
                        spaceBetween: 30
                    },

                }}
                // slidesPerView={1}
                autoplay={{
                    delay: 3000,
                    // disableOnInteraction: false,
                    pauseOnMouseEnter:true
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Autoplay]}
                speed={3000}
                className="mySwiper"
            >
                {popular && popular.map(movie =>
                    <SwiperSlide key={movie.id}>
                        <PopularListCard key={movie.id} movie={movie}/>
                    </SwiperSlide>
                )}

            </Swiper>

        </div>

    );
}

export {
    PopularList
}