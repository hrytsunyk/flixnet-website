import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {moviesActions} from "../../redux";
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {EffectCoverflow, Pagination, Navigation} from "swiper";
import {PopularListCard} from "../PopularListCard/PopularListCard";



const PopularList = () => {
    const dispatch = useDispatch();
    const {popular} = useSelector(state => state.movies);

    useEffect(() => {
        dispatch(moviesActions.getPopular())
    }, [dispatch])


    return (
        <div className={"swiperFather"}>
            <div className="container">
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={false}
                    loop={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 20,
                        depth: 100,
                        modifier: 2.5,
                    }}

                    pagination={{el: '.swiper-pagination', clickable: true}}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        clickable: true
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className={'swiper-container'}

                >
                    {popular.map(movie =>
                        <SwiperSlide>
                            <PopularListCard key={movie.id} movie={movie}/>
                        </SwiperSlide>
                    )}

                    <div className={'slider-container'}>
                        <div className={'swiper-button-prev slider-arrow'}>
                            <ion-icon name='arrow-back-outline'></ion-icon>
                        </div>

                        <div className={'swiper-button-next slider-arrow'}>
                            <ion-icon name='arrow-forward-outline'></ion-icon>
                        </div>

                        <div className={'swiper-pagination'}>
                        </div>
                    </div>

                </Swiper>
            </div>
        </div>

    );
};

export {
    PopularList
}