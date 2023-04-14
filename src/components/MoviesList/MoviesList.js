import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {moviesActions} from "../../redux/slices/moviesSlice";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";

import css from './MoviesList.module.css';
import {MyPagination, Pagination} from "../Pagination/Pagination";
import {SpinnerIcon} from "../Icons/SpinnerIcon";
import Poster from "../Poster/Poster";

const MoviesList = () => {
    const dispatch = useDispatch();

    const {movies, loading} = useSelector(state => state.movies);

    useEffect(() => {
        dispatch(moviesActions.getAll())
    }, [dispatch])

    console.log(movies)
    return (
        <div className={css.MoviesList}>
            {loading && <div className={css.Spinner}><SpinnerIcon/></div>}
            {
                movies &&
                <div className={css.MoviesListMap}>
                    {movies.map(
                        movie =>
                            <Poster
                                key={movie.id}
                                id={movie.id}
                                backdrop_path={movie.backdrop_path}
                                original_language={movie.original_language}
                                original_title={movie.original_title}
                                overview={movie.overview}
                                poster_path={movie.poster_path}
                                release_date={movie.release_date}
                                vote_average={movie.vote_average}
                                vote_count={movie.vote_count}
                                genre_ids={movie.genre_ids}
                            />
                    )
                    }
                </div>
            }
            {<div className={css.Pagination}><MyPagination/></div>}
        </div>
    );
};

export {
    MoviesList
}