import React from 'react';
import {SearchIcon} from "../../Icons/SearchIcon";

import css from './Search.css';


const SearchForm = () => {
    return (
            <form>
                <input placeholder={'Search'}/>
                <button><SearchIcon/></button>

            </form>
    );
};

export {
    SearchForm
}