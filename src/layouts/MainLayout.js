import React from 'react';
import {Outlet} from "react-router-dom";

import css from './MainLayout.module.css';
import {Footer} from "../components";
import {Header} from "../components";

const MainLayout = () => {

    return (
        <div className={css.MainLayoutFather}>

            <Header/>
            <Outlet/>
            <Footer/>

        </div>
    );
};

export {
    MainLayout
}