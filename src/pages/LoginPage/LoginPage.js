import React from 'react';
import {Outlet} from "react-router-dom";

import css from './LoginPage.module.css';

const LoginPage = () => {
    return (
        <div className={css.LoginPage}>
            <Outlet/>
        </div>
    );
};

export {
    LoginPage
}