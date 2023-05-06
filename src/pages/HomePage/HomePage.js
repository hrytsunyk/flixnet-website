import React from 'react';

import css from './HomePage.module.css';
import {PopularList} from "../../components/PopularList/PopularList";
import {TopRatedList} from "../../components/TopRatedList/TopRatedList";
import {UpcomingList} from "../../components/UpcomingList/UpcomingList";

const HomePage = () => {
    return (
        <div className={css.HomePage}>

            <UpcomingList/>
            <div className={css.hrLineFather}>
                <div className={css.hrLine}></div>
            </div>
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