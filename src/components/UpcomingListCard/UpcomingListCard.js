import React from 'react';
import Poster from "../Poster/Poster";

const UpcomingListCard = ({movie}) => {

    const {id, original_title, vote_average, vote_count, poster_path, release_date} = movie;


    return (
       <Poster
           id={id}
           original_title={original_title}
           vote_average={vote_average}
           vote_count={vote_count}
           poster_path={poster_path}
           release_date={release_date}
       />
    );
};

export {
    UpcomingListCard
}