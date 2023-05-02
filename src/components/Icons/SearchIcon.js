import React from 'react';
import css from "./SearchIcon.module.css";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

const SearchIcon = () => {
    return (
        <div className={css.SearchIcon}>
            <div className={css.verticalSearchLine}></div>
            <FontAwesomeIcon icon={faSearch} color={'white'} size={'1x'}/>
        </div>

    );
};

export {
    SearchIcon
}