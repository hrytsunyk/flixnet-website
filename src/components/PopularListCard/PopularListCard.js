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
            <img src={`${urls.base.getImg}${backdrop_path}`} alt=""/>
            <div className={css.reflectionImg}><img src={`${urls.base.getImg}${backdrop_path}`} alt=""/></div>
        </NavLink>
    );
};

export {
    PopularListCard
}