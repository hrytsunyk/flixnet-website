import React from 'react';

import css from './GenreBadge.module.css';
import {NavLink} from "react-router-dom";

const GenreBadge = ({genre}) => {
    const {id, name} = genre;

    return (
        <NavLink className={css.GenreBadge} to={`/genre/movie?with_genres=${id}&name=${name.toLowerCase()}`}>
            {genre &&
                <h5>{name}</h5>}
        </NavLink>

    );
};

export {
    GenreBadge
}