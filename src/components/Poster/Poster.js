import React from 'react';
import {urls} from "../../configs/urls";
import {RatingStars} from "../Rating/RatingStars";
import css from './Poster.module.css';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

const Poster = ({id, original_title, vote_average, vote_count, poster_path, release_date}) => {

    const {movieById,loading} = useSelector(state => state.movies);

    const sliceDate = release_date ? release_date.slice(0, 4) : '2022';


    return (

        <NavLink to={`/movie/${id}`}>
        {loading && <div>Loading>>>>>>>>>></div>}

            <div className={css.ListCardFather}>
                {<div className={css.TitleCard}>

                    <div className={css.Title}>
                        <h4>{original_title}</h4>
                        <h5>{sliceDate}</h5>
                    </div>

                    <img
                        className={css.ImgCard}
                        src={`${urls.base.getImg}${poster_path}`}
                        alt={original_title}
                    />

                    <div className={css.RatingYear}>
                        <RatingStars rating={vote_average}/>
                        Vote count: ({vote_count})
                    </div>

                </div>}
            </div>

        </NavLink>
    );
};

export default Poster;