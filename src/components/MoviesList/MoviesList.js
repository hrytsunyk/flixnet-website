import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {moviesActions} from "../../redux/slices/moviesSlice";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";

import css from './MoviesList.module.css';
import {MyPagination, Pagination} from "../Pagination/Pagination";
import {SpinnerIcon} from "../Icons/SpinnerIcon";

const MoviesList = () => {
    const dispatch = useDispatch();

    const {movies, loading} = useSelector(state => state.movies);

    useEffect(() => {
        dispatch(moviesActions.getAll())
    }, [dispatch])

    return (
        <div>
            {loading && <div className={css.Spinner}><SpinnerIcon/></div>}
            {
                movies &&
                <div
                    className={css.MoviesList}>{movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
                </div>
            }
            {<div className={css.Pagination}><MyPagination/></div>}
        </div>
    );
};

export {
    MoviesList
}