import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {searchActions} from "../../redux/slices/searchSlice";
import {useSearchParams} from "react-router-dom";
import {SearchMoviesListCard} from "../SearchMoviesListCard/SearchMoviesListCard";


const SearchMoviesList = () => {
    const dispatch = useDispatch();
    const {searchedMovies} = useSelector(state => state.search);


    return (
        <div>
            {
                searchedMovies.map(
                    searchedMovie =>
                        <SearchMoviesListCard
                            key={searchedMovie.id}
                            id={searchedMovie.id}
                            backdrop_path={searchedMovie.backdrop_path}
                            original_language={searchedMovie.original_language}
                            original_title={searchedMovie.original_title}
                            overview={searchedMovie.overview}
                            poster_path={searchedMovie.poster_path}
                            release_date={searchedMovie.release_date}
                            vote_average={searchedMovie.vote_average}
                            vote_count={searchedMovie.vote_count}
                        />
                )
            }
        </div>
    );
};

export {
    SearchMoviesList
}