import React from 'react';
import {NavLink} from "react-router-dom";

import css from './Navigation.module.css';

const Navigation = () => {
    return (
        <div className={css.NavBarFather}>
            <NavLink to={'home'}>
                <div className={css.NavBar_Home}>Home</div>
            </NavLink>

            <NavLink to={'movies'}>
                <div className={css.NavBarMovies}>Movies</div>
            </NavLink>

            <NavLink to={'tv_shows'}>
                <div className={css.NavBarTVshows}>TV shows</div>
            </NavLink>

            <NavLink to={'plans'}>
                <div className={css.NavBarPlans}>Plans</div>
            </NavLink>
            <NavLink to={'plans'}>
                <div className={css.NavBarPlans}>Plans</div>
            </NavLink>
        </div>
    );
};

export {
    Navigation
}