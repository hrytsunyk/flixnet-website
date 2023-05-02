import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {moviesActions} from "../../redux";


import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './PopularList.css'
import {PopularListCard} from "../PopularListCard/PopularListCard";

import {Autoplay, Pagination} from "swiper";


const PopularList = () => {

    const dispatch = useDispatch();
    const {popular} = useSelector(state => state.movies);

    useEffect(() => {
        dispatch(moviesActions.getPopular())
    }, [dispatch])


    return (
        <div className={'swiper-Father'}>
            <div className={'top-title'}><h2>POPULAR MOVIES:</h2></div>

            <Swiper
                centeredSlides={false}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 30
                    },
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 10
                    },
                    760: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    },
                    1280: {
                        slidesPerView: 4,
                        spaceBetween: 30
                    },

                }}
                slidesPerView={1}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,

                }}
                navigation={false}
                modules={[Autoplay, Pagination]}
                speed={500}
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