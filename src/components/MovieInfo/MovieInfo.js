import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {moviesActions} from "../../redux/slices/moviesSlice";
import {useParams} from "react-router-dom";
import {urls} from "../../configs/urls";

import css from './MovieInfo.module.css';
import {GenreBadge} from "../GenreBadge/GenreBadge";


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


    useEffect(() => {
        dispatch(moviesActions.getById({movieId}))
    }, [dispatch, movieId])

    return (

        <div className={css.MovieInfoFather}>

            {loading && <div>Loading>>>>>>.>.>></div>}


            {movieById &&
                <div className={css.MovieInfo}>
                    <img className={css.ImgMovieInfo} src={`${urls.base.getImg}/${movieById.poster_path}`} alt={`${movieById.title}`}/>

                    <div className={css.describtion}>
                        <h1>{movieById.original_title}</h1>
                        <div className={css.MovieGenre}>{genres.map((genre,index) => <GenreBadge genre={genre} key={index}/>)}</div>
                        <h5>Budget: {movieById.budget}</h5>
                        <h5>Language: {movieById.original_language}  </h5>
                        <h5>Release date: {movieById.release_date}</h5>
                        <h5>Revenue: {movieById.revenue}</h5>
                        <h5>Runtime: {movieById.runtime}</h5>
                        <h4>Overview: {movieById.overview}</h4>
                    </div>
                </div>
            }
        </div>
    )
}


export {
    MovieInfo
}