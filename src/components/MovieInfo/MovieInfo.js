import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {moviesActions} from "../../redux/slices/moviesSlice";
import {useParams, useSearchParams} from "react-router-dom";
import Poster from "../Poster/Poster";
import {urls} from "../../configs/urls";

import css from './MovieInfo.module.css';

const MovieInfo = () => {

    const dispatch = useDispatch();

    const {movieId} = useParams();

    const {movieById, loading} = useSelector(state => state.movies);

    const genres = [];

    for (const key in movieById) {
        if (key === 'genres') {
            for (const genre of movieById[key])
                genres.push(genre)
        }
    }
// movieById.genres.map(genre => console.log(genre))

    useEffect(() => {
        dispatch(moviesActions.getById({movieId}))
    }, [dispatch, movieId])

    return (
        <div className={css.MovieInfoFather}>
            {loading && <h1>loading......</h1> }
            {movieById &&
                <div>
                    <img src={`${urls.base.getImg}/${movieById.poster_path}`} alt={`${movieById.title}`}/>
                </div>
            }

            {movieById &&
                <div className={css.overview}>
                    <h4>{movieById.original_title}</h4>
                    {/*{genres && genres.map(genre =>}*/}
                    <h5>Budget: {movieById.budget}</h5>
                    <h5>Language: {movieById.original_language}</h5>
                    <h5>Release date: {movieById.release_date}</h5>
                    <h5>Revenue: {movieById.revenue}</h5>
                    <h5>Runtime: {movieById.runtime}</h5>
                    <h5>{movieById.vote_count}</h5>
                    <h5>Overview: {movieById.overview}</h5>
                </div>
            }

        </div>
    );
}


export {
    MovieInfo
}