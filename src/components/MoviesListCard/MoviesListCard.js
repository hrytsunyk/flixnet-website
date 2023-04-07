import React from 'react';
import {urls} from "../../configs/urls";

import css from './MoviesListCard.module.css';

const MoviesListCard = ({movie}) => {

    const {
        id, backdrop_path, original_language, original_title,
        overview, poster_path, release_date, vote_average, vote_count
    } = movie;

    return (
        <div className={css.ListCardFather}>
            <div>
                <div>
                    {original_title}
                </div>
                <img
                    className={css.ListCardImg}
                    src={`${urls.base.getImg}${poster_path}`}
                    alt={original_title}
                />
            </div>

        </div>
    );
};

export {
    MoviesListCard
}