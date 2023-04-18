import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { sortedGenresActions} from "../../redux";
import {useSearchParams} from "react-router-dom";
import {SortedGenreListCard} from "../SortedGenreListCard/SortedGenreListCard";

import css from './SortedGenreList.module.css';
import {SpinnerIcon} from "../Icons/SpinnerIcon";

const SortedGenreList = () => {

    const dispatch = useDispatch();

    const [query] = useSearchParams();


    const genreId = query.get('with_genres');
    const nameQuery = query.get('name');



    const {sortedByGenre, loading} = useSelector(state => state.sortedGenres);


    useEffect(() => {
        dispatch(sortedGenresActions.sortedGenres({genreId}))
        window.scroll(0,0)
    }, [dispatch, genreId])


    localStorage.setItem('name', nameQuery)

    const localStorageGenreTitle =  localStorage.getItem('name');

    return (
        <div className={css.SortedMoviesList}>

            {loading && <div className={css.Spinner}><SpinnerIcon/></div>}

            <div className={css.GenreName}>
                <h2>{localStorageGenreTitle.toLowerCase().toUpperCase()}:</h2>

                <h2 className={css.reflectionH2}>
                    {localStorageGenreTitle.toUpperCase()}:
                </h2>
            </div>

            {sortedByGenre &&
                sortedByGenre.map(sortedMovie =>
                    <SortedGenreListCard
                        key={sortedMovie.id}
                        movie={sortedMovie}
                    />
                )
            }
        </div>
    );
};

export {
    SortedGenreList
}