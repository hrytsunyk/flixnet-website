import React from 'react';
import {useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {SortedGenreListCard} from "../SortedGenreListCard/SortedGenreListCard";

import css from './SortedGenreList.module.css';
import {SpinnerIcon} from "../Icons/SpinnerIcon";

import {SortedByGenrePagination} from "../Pagination/SortedByGenrePagination";

const SortedGenreList = () => {
    const [query] = useSearchParams();
    const nameQuery = query.get('name');
    const {sortedByGenre, loading} = useSelector(state => state.sortedGenres);


    localStorage.setItem('name', nameQuery)
    const localStorageGenreTitle =  localStorage.getItem('name');

    return (
        <div className={css.SortedGenreListFather}>

            {loading && <div className={css.Spinner}><SpinnerIcon/></div>}

            <div className={css.GenreName}>
                <h2>
                    {localStorageGenreTitle.toUpperCase()}:
                </h2>
                <h2 className={css.reflectionH2}>
                    {localStorageGenreTitle.toUpperCase()}:
                </h2>
            </div>

            <div className={css.SortedGenreList}>{sortedByGenre &&
                sortedByGenre.map(sortedMovie =>
                    <SortedGenreListCard
                        key={sortedMovie.id}
                        movie={sortedMovie}
                    />
                )
            }</div>

            <div className={css.SortedGenreListPagination}><SortedByGenrePagination/></div>

        </div>
    );
};

export {
    SortedGenreList
}