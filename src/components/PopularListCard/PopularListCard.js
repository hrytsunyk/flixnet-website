import React from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';

import {urls} from "../../configs";
import css from './PopularListCard.module.css';
import {NavLink} from "react-router-dom";
import {RatingStars} from "../Rating/RatingStars";


const PopularListCard = ({movie}) => {

    const {id, poster_path, original_title, release_date, vote_count, vote_average, backdrop_path, genre_ids} = movie;

    console.log(movie)


    return (
        <NavLink to={`/movie/${id}`}>
            <div className={css.reflectionImgFather}>
                <div>
                    <div className={css.RatingStars}>
                        Total votes: {vote_count}
                        <RatingStars rating={vote_average}/>
                    </div>
                    <div className={css.TopImgReflection}><img src={`${urls.base.getImg}${backdrop_path}`}
                                                               alt={original_title}/></div>
                    <div className={css.TitleMovie}><h5>{original_title.toUpperCase()}</h5></div>
                </div>
                <div className={css.reflectionImg}><img src={`${urls.base.getImg}${backdrop_path}`}
                                                        alt={original_title}/></div>

            </div>
        </NavLink>
    );
};

export {
    PopularListCard
}