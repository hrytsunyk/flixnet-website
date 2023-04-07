import React from 'react';
import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import {PropagateLoader, RingLoader} from "react-spinners";

import css from './SocialMediaIcons/SocialMediaIcons.css';

const override= {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};

const SpinnerIcon = () => {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");

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