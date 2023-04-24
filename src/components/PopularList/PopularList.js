import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {moviesActions} from "../../redux";


import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {PopularListCard} from "../PopularListCard/PopularListCard";

import {Autoplay, Pagination, Navigation} from "swiper";


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
                spaceBetween={30}
                centeredSlides={false}
                slidesPerView={4}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {popular.map(movie=>
                    <SwiperSlide>
                        <PopularListCard key={movie.id} movie={movie}/>
                    </SwiperSlide>
                )}

            </Swiper>
        </div>

    );
};

export {
    PopularList
}