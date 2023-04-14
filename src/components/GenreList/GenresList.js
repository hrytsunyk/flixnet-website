import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {genreActions} from "../../redux/slices/genreSlice";
import {GenreBadge} from "../GenreBadge/GenreBadge";

import css from './GenresList.module.css';

const GenresList = () => {

    const dispatch = useDispatch();
    const {genresList} = useSelector(state => state.genres);


    useEffect(()=> {
        dispatch(genreActions.getGenreList())
    }, [dispatch])
    console.log(genresList)

    return (
        <div className={css.GenresList}>
            {genresList.map(genre => <GenreBadge key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {
    GenresList
}