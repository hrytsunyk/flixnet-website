import React from 'react';

import css from './Footer.module.css';
import {SocialMediasIcons} from "../Icons/SocialMediasIcons";

const Footer = () => {
    return (
        <div className={css.Footer}>
            <SocialMediasIcons/>
        </div>
    );
};

export default Footer;