import React from 'react';
import {useNavigate} from "react-router-dom";

import css from './Logo.module.css';

const Logo = () => {
    const navigate = useNavigate();
    return (
        <div className={css.Logo}>
            <h2 onClick={()=> navigate('/home')}>FLIXNET</h2>
        </div>
    );
};

export {
    Logo
}