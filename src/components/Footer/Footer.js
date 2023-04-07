import React from 'react';

import css from './Footer.module.css';
import {SocialMediasIcons} from "../Icons/SocialMediaIcons/SocialMediasIcons";
import {Logo} from "../Logo/Logo";

const  Footer = () => {
    return (
        <div className={css.Footer}>
            <div className={css.TopBlock}>
                <div className={css.FooterLogo}><Logo/></div>
                <SocialMediasIcons/>
            </div>
        </div>
    );
};

export default Footer;