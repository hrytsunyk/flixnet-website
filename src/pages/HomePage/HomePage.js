import React from 'react';

import css from './HomePage.module.css';
import {PopularList} from "../../components/PopularList/PopularList";
import {TopRatedList} from "../../components/TopRatedList/TopRatedList";
import {UpcomingList} from "../../components/UpcomingList/UpcomingList";

const HomePage = () => {
    return (
        <div className={css.HomePage}>
            <div className={css.titleHomepage}>
                <h3>Upcoming:</h3>
            </div>
            <UpcomingList/>
            <div className={css.hrLineFather}>
                <div className={css.hrLine}></div>
            </div>
            <div className={css.titleHomepage}>
                <h3>Popular movies:</h3>
            </div>
            <PopularList/>
            <div className={css.hrLineFather}>
                <div className={css.hrLine}></div>
            </div>
            <div className={css.titleHomepage}>
                <h3>Top rated:</h3>
            </div>
            <TopRatedList/>
        </div>
    );
};

export {
    HomePage
}