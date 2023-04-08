import React from 'react';

import css from './Footer.module.css';
import {SocialMediasIcons} from "../Icons/SocialMediaIcons/SocialMediasIcons";
import {Logo} from "../Logo/Logo";
import {Navigation} from "../Navigation/Navigation";

const Footer = () => {
    return (
        <div className={css.Footer}>
            <div className={css.TopBlock}>
                <div className={css.FooterLogo}><Logo/></div>
                <div>
                    <div className={css.FooterNavigationFather}>
                        <Navigation/>
                    </div>
                </div>
                <SocialMediasIcons/>
            </div>
        </div>
    );
};

export default Footer;