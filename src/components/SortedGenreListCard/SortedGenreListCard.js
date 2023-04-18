import React from 'react';
import Poster from "../Poster/Poster";

import css from './SortedPoster.module.css';

const SortedGenreListCard = ({movie}) => {
    const {id,poster_path,original_title,release_date,vote_count,vote_average} = movie;
    return (
        <div className={css.SortedPoster}>
            <Poster
                id={id}
                poster_path={poster_path}
                original_title={original_title}
                release_date={release_date}
                vote_count={vote_count}
                vote_average={vote_average}
            />
        </div>
    );
};

export {
    SortedGenreListCard
}