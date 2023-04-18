import React, {useEffect, useMemo, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {sortedByGenreReducer, sortedGenresActions} from "../../redux/slices/sortedGenreSlice";
import {useSearchParams} from "react-router-dom";
import {SortedGenreListCard} from "../SortedGenreListCard/SortedGenreListCard";

import css from './SortedGenreList.module.css';

const SortedGenreList = () => {

    const dispatch = useDispatch();

    const [query] = useSearchParams();


    const genreId = query.get('with_genres');
    const nameQuery = query.get('name');

    // console.log(nameQuery)


    const {sortedByGenre} = useSelector(state => state.sortedGenres);
    const {genresList} = useSelector(state => state.genres);


    useEffect( () => {
        dispatch(sortedGenresActions.sortedGenres({genreId}))

    }, [dispatch, query, genreId,nameQuery])

    return (
        <div className={css.SortedMoviesList}>
            <div className={css.GenreName}>
                {nameQuery &&
                    genresList.map(genre =>
                        <div key={genre.id}>
                            {(genre.id === +genreId) ? <h2>{nameQuery.toUpperCase()}:</h2> : null}
                        </div>)
                }
            </div>
            {sortedByGenre && sortedByGenre.map(sortedMovie => <SortedGenreListCard key={sortedMovie.id}
                                                                                    movie={sortedMovie}/>)}
        </div>
    );
};

export {
    SortedGenreList
}