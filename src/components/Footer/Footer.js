import React from 'react';

import css from './Footer.module.css';
import {SocialMediasIcons} from "../Icons/SocialMediaIcons/SocialMediasIcons";
import {Logo} from "../Logo/Logo";
import {Navigation} from "../Navigation/Navigation";

const Footer = () => {
    return (
        <div className={css.FooterFather}>

            <div className={css.FooterLogo}>
                <Logo/>


                <Navigation/>

                <SocialMediasIcons/>
            </div>
        </div>
    );
}

export {
    Footer
}