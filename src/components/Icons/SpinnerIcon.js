import React from 'react';

import {RingLoader} from "react-spinners";

import css from './SocialMediaIcons/SocialMediaIcons.css';


const SpinnerIcon = () => {
    return (
        <div className="sweet-loading">

            <RingLoader
                className={css.Spinner}
                size={50}
                color={'#ffbe00'}
            />
        </div>
    );
};

export {
    SpinnerIcon
}