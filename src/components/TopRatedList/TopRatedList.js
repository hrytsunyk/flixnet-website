import React from 'react';
import { useSelector} from "react-redux";
import TopRatedListCard from "../TopRatedListCard/TopRatedListCard";
import css from './TopRatedList.module.css';
import {TopRatedListPagination} from "../Pagination/TopRatedListPagination";

const TopRatedList = () => {

    const {topRated} = useSelector(state => state.movies);


    return (
        <div className={css.TopRatedListFather}>
            <div className={css.hrLine}></div>

            <div className={css.topRated}><h3>Top rated:</h3></div>
            {topRated.map(topMovie => <TopRatedListCard key={topMovie.id} topMovie={topMovie}/>)}

            <div className={css.TopRatedListPagination}>
                <TopRatedListPagination/>
            </div>
        </div>
    );
};

export {
    TopRatedList
}