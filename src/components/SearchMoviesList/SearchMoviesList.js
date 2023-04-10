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

const SearchMoviesList = () => {
    const dispatch = useDispatch();
    const {searchedMovies, loading} = useSelector(state => state.search);


    const [query, setQuery] = useSearchParams({page: '1'});

    const queryPageNumber = query.get('page');
    const queryName = query.get('name');

    useEffect((e) => {
        dispatch(moviesActions.getAll({page: queryPageNumber, name:queryName}))
        window.scroll(0,0)

    }, [dispatch, query]);


    return (
        <div className={css.SearchMoviesList}>
            {loading && <div className={css.Spinner}><SpinnerIcon/></div>}

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
                            poster_path={searchedMovie.poster_path ? searchedMovie.poster_path : '/80GiQ5EaNh1g3Soe1DPZqYnSx44.jpg'}
                            release_date={searchedMovie.release_date}
                            vote_average={searchedMovie.vote_average}
                            vote_count={searchedMovie.vote_count}
                        />
                )
            }

            <Pagination
                count={500}
                page={+queryPageNumber}
                renderItem={ (item) => (
                    <PaginationItem
                        component={Link}
                        to={`?page=${item.page}&name=${queryName}`}
                        slots={{previous: ArrowBackIcon, next: ArrowForwardIcon}}
                        {...item}
                    />
                )}
            />
        </div>
    );
};

export {
    SearchMoviesList
}