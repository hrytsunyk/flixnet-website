import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {SearchMoviesListCard} from "../SearchMoviesListCard/SearchMoviesListCard";

import css from './SearchMoviesList.module.css';
import {SpinnerIcon} from "../Icons/SpinnerIcon";
import PaginationItem from "@mui/material/PaginationItem";
import {Link, useSearchParams} from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Pagination from "@mui/material/Pagination";
import {moviesActions} from "../../redux/slices/moviesSlice";
import {MoviesPage} from "../../pages";
import {MoviesListPagination} from "../Pagination/MoviesListPagination";
import {SearchingListPagination} from "../Pagination/SearchingListPagination";

const SearchMoviesList = () => {
    const {searchedMovies, loading, totalPages, errors} = useSelector(state => state.search);



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