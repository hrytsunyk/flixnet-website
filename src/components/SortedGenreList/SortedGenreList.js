import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {moviesActions, searchActions, sortedGenresActions} from "../../redux";
import {Link, useSearchParams} from "react-router-dom";
import {SortedGenreListCard} from "../SortedGenreListCard/SortedGenreListCard";

import css from './SortedGenreList.module.css';
import {SpinnerIcon} from "../Icons/SpinnerIcon";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {SortedByGenrePagination} from "../Pagination/SortedByGenrePagination";

const SortedGenreList = () => {

    const dispatch = useDispatch();
    const dispatch1 = useDispatch();

    const [query] = useSearchParams();


    const nameQuery = query.get('name');
    // const genreId = query.get('with_genres');
    // const queryPageNumber = query.get('page');
    // const queryName = query.get('name');



    const {sortedByGenre, loading} = useSelector(state => state.sortedGenres);

    console.log(sortedByGenre);

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