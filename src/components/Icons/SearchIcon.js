import React from 'react';
import css from "../Header/Header.module.css";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

const SearchIcon = () => {
    return (
            <div className={css.SearchIconFather}>
                <FontAwesomeIcon icon={faSearch} color={'black'} size={'xs'}/>
            </div>
    );
};

export {
    SearchIcon
}