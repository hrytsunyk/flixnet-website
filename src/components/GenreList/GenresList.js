import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {genreActions} from "../../redux";
import {GenreBadge} from "../GenreBadge/GenreBadge";

// import css from './GenresList.css';
import {Swiper, SwiperSlide} from "swiper/react";
import '././GenresList.css';

const GenresList = () => {

    const dispatch = useDispatch();
    const {genresList} = useSelector(state => state.genres);


    useEffect(() => {
        dispatch(genreActions.getGenreList())
    }, [dispatch])

    return (
        <div className={'GenresList'}>
            {/*{genresList.map(genre => <GenreBadge key={genre.id} genre={genre} id={genre.id}/>)}*/}
            <Swiper
                centeredSlides={false}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 30
                    },
                    375: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    },
                    670: {
                        slidesPerView: 2,
                        spaceBetween: 10
                    },
                    768: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                    },
                    890: {
                        slidesPerView: 8,
                        spaceBetween: 30,
                    },

                    1189: {
                        slidesPerView: 10,
                        spaceBetween: 20
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