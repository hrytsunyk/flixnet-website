import React from 'react';

import css from './HomePage.module.css';
import {PopularList} from "../../components/PopularList/PopularList";
import {TopRatedList} from "../../components/TopRatedList/TopRatedList";

const HomePage = () => {
    return (
        <div className={css.HomePage}>
            <PopularList/>
            <div className={css.TopRatedListFather}>
                <TopRatedList/>
            </div>
        </div>
    );
};

export {
    HomePage
}