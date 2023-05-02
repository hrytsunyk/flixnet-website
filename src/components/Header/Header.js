import React from 'react';

import css from './Header.module.css';
import {Logo} from "../Logo/Logo";
import {SearchForm} from "../Forms/SearchForm/SearchForm";
import {AvatarImage} from "../Avatar/Avatar";
import {MyHamburgerMenu} from "../HamburgerMenu/HamburgerMenu";
import {LeftSlidebar} from "../Slidebars/LeftSlidebar";

const Header = () => {
    return (
        <div className={css.HeaderFather}>
            <div className={css.HeaderLogoBurger}>
                <LeftSlidebar/>
                <Logo/>
            </div>
            <SearchForm/>

            <div className={css.LogoNav}>
                {/*<div className={css.NavigationBar}><Navigation/></div>*/}
                <AvatarImage/>
            </div>

            {/*<div className={css.HrLine}/>*/}


        </div>
    );
};

export {
    Header
}