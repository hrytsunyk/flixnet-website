import React from 'react';
import {useSelector} from "react-redux";

import {SearchMoviesListCard} from "../SearchMoviesListCard/SearchMoviesListCard";

import css from './SearchMoviesList.module.css';
import {SpinnerIcon} from "../Icons/SpinnerIcon";
import {SearchingListPagination} from "../Pagination/SearchingListPagination";

const SearchMoviesList = () => {
    const {searchedMovies, loading} = useSelector(state => state.search);



    return (
        <div className={css.SearchMoviesListFather}>
            {loading && <div className={css.Spinner}><SpinnerIcon/></div>}

            <div className={css.SearchMoviesList}>{searchedMovies &&
                searchedMovies.map(
                    searchedMovie =>
                        <SearchMoviesListCard
                            key={searchedMovie.id}
                            id={searchedMovie.id}
                            backdrop_path={searchedMovie.backdrop_path}
                            original_language={searchedMovie.original_language}
                            original_title={searchedMovie.original_title}
                            overview={searchedMovie.overview}
                            poster_path={searchedMovie.poster_path ? searchedMovie.poster_path : '/80GiQ5EaNh1g3Soe1DPZqYnSx44.jpg'}
                            release_date={searchedMovie.release_date}
                            vote_average={searchedMovie.vote_average}
                            vote_count={searchedMovie.vote_count}
                        />
                )
            }

            </div>
            <div className={css.SearchMoviesListPagination}><SearchingListPagination/></div>

        </div>
    );
};

export {
    SearchMoviesList
}