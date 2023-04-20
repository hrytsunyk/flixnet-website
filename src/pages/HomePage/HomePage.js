import React from 'react';

import css from './HomePage.module.css';
import {PopularList} from "../../components/PopularList/PopularList";

const HomePage = () => {
    return (
        <div className={css.HomePage}>
            <PopularList/>
        </div>
    );
};

export {
    HomePage
}