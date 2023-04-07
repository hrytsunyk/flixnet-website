import React from 'react';

import css from './Header.module.css';
import {Navigation} from "../Navigation/Navigation";
import {Logo} from "../Logo/Logo";
import {SearchForm} from "../Forms/SearchForm/SearchForm";
import {AvatarImage} from "../Avatar/Avatar";

const Header = () => {
    return (
        <div className={css.HeaderFather}>
            <Logo/>
            <Navigation/>

            <div className={css.LogoNav}>
                <SearchForm/>
                <AvatarImage/>
            </div>

        </div>
    );
};

export {
    Header
}