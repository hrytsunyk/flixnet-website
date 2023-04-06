import React from 'react';
import {MoviesList} from "../../components/MoviesList/MoviesList";

import css from './MoviesPage.module.css';

const MoviesPage = () => {

    return (
        <div className={css.MoviesPage}>
            <MoviesList/>
        </div>
    );
};

export {
    MoviesPage
}