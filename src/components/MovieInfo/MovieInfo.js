import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {moviesActions} from "../../redux";
import {useParams} from "react-router-dom";
import {urls} from "../../configs";

import css from './MovieInfo.module.css';
import {GenreBadge} from "../GenreBadge/GenreBadge";
import {RatingStars} from "../Rating/RatingStars";
import {SpinnerIcon} from "../Icons/SpinnerIcon";


const MovieInfo = () => {

    const dispatch = useDispatch();

    const {movieId} = useParams();

    const {movieById, loading2} = useSelector(state => state.movies);

    const genres = [];

    for (const key in movieById) {
        if (key === 'genres') {
            for (const genre of movieById[key])
                genres.push(genre)
        }
    }


    useEffect(() => {
        dispatch(moviesActions.getById({movieId}))
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }, [dispatch, movieId])

    return (

        <div className={css.MovieInfoFather}>

            {loading2 && <div className={css.Spinner}><SpinnerIcon/></div>}



            {movieById &&
                <div className={css.MovieInfo}>
                    <img className={css.ImgMovieInfo} src={`${urls.base.getImg}/${movieById.poster_path}`} alt={`${movieById.title}`}/>

                    <div className={css.describtion}>
                        <h1>{movieById.original_title}</h1>
                        <div className={css.MovieGenre}>{genres.map((genre,index) => <GenreBadge genre={genre}  key={index}/>)}</div>
                        <h5>Budget: {movieById.budget}</h5>
                        <h5>Language: {movieById.original_language}  </h5>
                        <h5>Release date: {movieById.release_date}</h5>
                        <h5>Revenue: {movieById.revenue}</h5>
                        <h5>Runtime: {movieById.runtime}</h5>
                        <RatingStars rating={movieById.vote_average}/>
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