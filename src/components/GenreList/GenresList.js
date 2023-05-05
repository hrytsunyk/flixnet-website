import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {genreActions} from "../../redux";
import {GenreBadge} from "../GenreBadge/GenreBadge";

import css from './GenresList.module.css';
import {Swiper, SwiperSlide} from "swiper/react";

const GenresList = () => {

    const dispatch = useDispatch();
    const {genresList} = useSelector(state => state.genres);


    useEffect(() => {
        dispatch(genreActions.getGenreList())
    }, [dispatch])

    return (
        <div className={css.GenresList}>
            {/*{genresList.map(genre => <GenreBadge key={genre.id} genre={genre} id={genre.id}/>)}*/}
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
                        slidesPerView: 11,
                        spaceBetween: 5
                    },

                }}
                // slidesPerView={1}
                autoplay={{
                    delay: 3000,
                    // disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }}
                navigation={false}
                // modules={{ousewheel}
                mousewheel={true}
                scrollbar={true}
                speed={3000}
                className="mySwiper"
            >

                {genresList.map(genre =>
                    <SwiperSlide key={genre.id}>
                        <GenreBadge key={genre.id} genre={genre} id={genre.id}/>
                    </SwiperSlide>
                )}

            </Swiper>
        </div>
    );
};

export {
    GenresList
}