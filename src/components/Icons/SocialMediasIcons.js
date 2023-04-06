import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

// import css from './Icons.module.css';
const SocialMediasIcons = () => {
    return (
        <div>
            <ul>
                <a href={'#'}>
                    <li>
                        <FontAwesomeIcon icon={"facebook-f"}/>
                    </li>
                </a>

                <a href={'#'}>
                    <li>
                        <FontAwesomeIcon icon={"twitter"}/>
                    </li>
                </a>

                <a href={'#'}>
                    <li>
                        <FontAwesomeIcon icon={"linkedin-in"}/>
                    </li>
                </a>

                <a href={'#'}>
                    <li>
                        <FontAwesomeIcon icon={"google-plus"}/>
                    </li>
                </a>
            </ul>
        </div>
    );
};

export {
    SocialMediasIcons
}