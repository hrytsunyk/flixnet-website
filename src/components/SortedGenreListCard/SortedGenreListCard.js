import React from 'react';
import Poster from "../Poster/Poster";

const SortedGenreListCard = ({movie}) => {
    const {id,poster_path,original_title,release_date,vote_count,vote_average} = movie;
    return (
        <div>
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