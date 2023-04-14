import React from 'react';
import {Outlet} from "react-router-dom";
import {Header} from "../components/Header/Header";

import css from './MainLayout.module.css';
import Footer from "../components/Footer/Footer";
import {GenresList} from "../components/GenreList/GenresList";
import {TopSlideBar} from "../components/Slidebars/TopSlidebar";

const MainLayout = () => {
    return (
        <div className={css.MainLayoutFather}>
            <Header/>
            {/*<GenresList/>*/}
            <Outlet/>
            <Footer/>
        </div>
    );
};

export {
    MainLayout
}