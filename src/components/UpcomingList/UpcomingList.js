import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {UpcomingListCard} from "../UpcomingListCard/UpcomingListCard";

import {moviesActions} from "../../redux";

import   './UpcomingList.css';
import {Swiper, SwiperSlide} from "swiper/react";

const UpcomingList = () => {

    const dispatch = useDispatch();
    const {upcomingList} = useSelector(state => state.movies);

    useEffect(()=>{
        dispatch(moviesActions.getUpcoming())
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    },[dispatch])


    return (
        <div className={'UpcomingFather'}>
            {/*<div className={css.UpcomingList}>{upcomingList.map(upcoming => <UpcomingListCard key={upcoming.id} movie={upcoming}/>)}</div>*/}
            <Swiper
                centeredSlides={false}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 30
                    },
                    375: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },

                    768: {
                        slidesPerView: 4,
                        spaceBetween: 20,
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
                        slidesPerView: 8,
                        spaceBetween: 30
                    },

                }}
                // navigation={false}
                // mousewheel={true}
                // scrollbar={true}
                speed={3000}
                className="mySwiper"
            >

                {upcomingList.map(upcoming =>
                    <SwiperSlide key={upcoming.id}>
                        <UpcomingListCard key={upcoming.id} movie={upcoming}/>
                    </SwiperSlide>
                )}

            </Swiper>

        </div>
    );
};

export {
    UpcomingList
}