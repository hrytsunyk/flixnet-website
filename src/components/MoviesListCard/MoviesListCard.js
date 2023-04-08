import React from 'react';
import {urls} from "../../configs/urls";

import css from './MoviesListCard.module.css';
import {RatingStars} from "../Rating/RatingStars";

const MoviesListCard = ({movie}) => {

    const {
        id, backdrop_path, original_language, original_title,
        overview, poster_path, release_date, vote_average, vote_count
    } = movie;

    const sliceDate = release_date ? release_date.slice(0, 4) : '2022';
    return (
        <div className={css.ListCardFather}>
            <div className={css.TitleCard}>

                <div className={css.Title}>
                    <h4>{original_title}</h4>
                     <h5>{sliceDate}</h5>

                </div>
                <img
                    className={css.ImgCard}
                    src={`${urls.base.getImg}${poster_path}`}
                    alt={original_title}
                />
                <div className={css.RatingYear}>
                    <RatingStars rating={vote_average}/>
                   Vote count: ({vote_count})
                </div>
            </div>

        </div>

    )
        ;
};

export {
    MoviesListCard
}