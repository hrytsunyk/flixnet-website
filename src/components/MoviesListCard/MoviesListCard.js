import React from 'react';
import {urls} from "../../configs/urls";

import css from './MoviesListCard.module.css';
import {RatingStars} from "../Rating/RatingStars";
import {SearchMoviesListCard} from "../SearchMoviesListCard/SearchMoviesListCard";
import Poster from "../Poster/Poster";

const MoviesListCard = () => {


    return (
        <div>
            <Poster/>
        </div>
    )
        ;
};

export {
    MoviesListCard
}