import React from 'react';
import Poster from "../Poster/Poster";

const TopRatedListCard = ({topMovie}) => {

    const {id, original_title, vote_average, vote_count, poster_path, release_date} = topMovie;


    return (
        <Poster
            id={id}
            poster_path={poster_path}
            original_title={original_title}
            release_date={release_date}
            vote_count={vote_count}
            vote_average={vote_average}
        />
    );
};

export default TopRatedListCard;