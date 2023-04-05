import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {moviesActions} from "../../redux/slices/moviesSlice";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";

const MoviesList = () => {
    const dispatch = useDispatch();

    const {movies} = useSelector(state => state.movies);

    useEffect(()=>{
        dispatch(moviesActions.getAll())
    },[dispatch])

    return (
        <div>
            {movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {
    MoviesList
}