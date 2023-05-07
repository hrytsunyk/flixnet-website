import React from 'react';
import {Outlet} from "react-router-dom";

import css from './MainLayout.module.css';
import {Footer, GenresList} from "../components";
import {Header} from "../components";

const MainLayout = () => {

    return (
        <div className={css.MainLayoutFather}>

            <Header/>
            <GenresList/>
            <Outlet/>
            <Footer/>

        </div>
    );
};

export {
    MainLayout
}