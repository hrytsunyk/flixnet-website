import React from 'react';
import {faSearch} from '@fortawesome/free-solid-svg-icons'

import css from './Header.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={css.HeaderFather}>
            <div>
                <h3>FLIXNET</h3>
            </div>

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

                <NavLink to={'animations'}>
                    <div className={css.NavBarAnim}>Animations</div>
                </NavLink>

                <NavLink to={'plans'}>
                    <div className={css.NavBarPlans}>Plans</div>
                </NavLink>
            </div>

            <div className={css.HeaderIconsFather}>
                <FontAwesomeIcon icon={faSearch} color={'white'}/>
            </div>
        </div>
    );
};

export {
    Header
}