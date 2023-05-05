import React from 'react';
import {urls} from "../../configs/urls";
import {RatingStars} from "../Rating/RatingStars";
import css from './Poster.module.css';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

import {SpinnerIcon} from "../Icons/SpinnerIcon";

const Poster = ({id, original_title, vote_average, vote_count, poster_path, release_date,genre_ids, genreId}) => {

    const {loading2} = useSelector(state => state.movies);

    const sliceDate = release_date ? release_date.slice(0, 4) : '2022';


    return (

        <div  className={css.ListCardFather}>
            {loading2 && <div className={css.Spinner}><SpinnerIcon/></div>}


            <div className={css.TitleCard}>
            <NavLink to={`/movie/${id}`}>

                <div className={css.Title}>
                    <h4>{original_title.toUpperCase()}</h4>
                    <h5>{sliceDate}</h5>
                </div>

                <img
                    className={css.ImgCard}
                    src={`${urls.base.getImg}${poster_path}`}
                    alt={original_title}
                />

                <div className={css.RatingYear}>
                    <RatingStars rating={vote_average}/>
                    Total votes: {vote_count}
                </div>

        </NavLink>
            </div>


        </div>
    );
};

export default Poster;