import React from 'react';
import {MoviesList} from "../../components";

import css from './MoviesPage.module.css';

const MoviesPage = () => {

    return (
        <div className={css.MoviesPage}>
            <div className={css.titleMoviesPage}>
                <h2>ALL MOVIES:</h2>
                <h2 className={css.reflectionH2}>ALL MOVIES:</h2>
            </div>
            <MoviesList/>

        </div>
    );
};

export {
    MoviesPage
}