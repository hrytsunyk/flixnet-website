import React from 'react';
import {Outlet} from "react-router-dom";
import {Header} from "../components/Header/Header";

import css from './MainLayout.module.css';
import Footer from "../components/Footer/Footer";

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