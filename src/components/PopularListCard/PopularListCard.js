import React from 'react';
import 'react-slideshow-image/dist/styles.css'
import 'react-slideshow-image/dist/styles.css'
import 'react-alice-carousel/lib/alice-carousel.css';

import Poster from "../Poster/Poster";
import {urls} from "../../configs";

import css from './PopularListCard.module.css';
import {NavLink} from "react-router-dom";

const PopularListCard = ({movie}) => {

    const {id, poster_path, original_title, release_date, vote_count, vote_average, backdrop_path} = movie;






    return (
        <NavLink to={`/movie/${id}`}>
            <div className={css.reflectionImgFather}>
                <div className={css.TitleImg}>
                    <div className={css.TopImgReflection}><img src={`${urls.base.getImg}${backdrop_path}`} alt=""/>
                    </div>
                    <div className={css.TitleMovie}><h5>{original_title.toUpperCase()}</h5></div>
                </div>
                <div className={css.reflectionImg}><img src={`${urls.base.getImg}${backdrop_path}`} alt=""/></div>
            </div>
        </NavLink>
    );
};

export {
    PopularListCard
}