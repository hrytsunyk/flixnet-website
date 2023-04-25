import React from 'react';
import {MovieInfo} from "../../components";
import {VideoList} from "../../components/VideoList/VideoList";
import css from './MovieInfoPage.module.css';

const MovieInfoPage = () => {
    return (
        <div className={css.MovieInfoPage}>
            <MovieInfo/>
            <VideoList/>
        </div>
    );
};

export {
    MovieInfoPage
}