import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {useDispatch} from "react-redux";
import {Link, useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {moviesActions} from "../../redux";
import './Pagination.css';


const MoviesListPagination = () => {
    const dispatch = useDispatch();

    const [query] = useSearchParams({page: '1'});

    const queryPageNumber = query.get('page');

    useEffect((e) => {
        dispatch(moviesActions.getAll({page: queryPageNumber}))
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }, [dispatch, query, queryPageNumber]);


    return (

        <Pagination
            count={500}
            page={+queryPageNumber}
            renderItem={(item) => (
                <PaginationItem
                    key={item}
                    component={Link}
                    to={`/movies?page=${item.page}`}
                    slots={{previous: ArrowBackIcon, next: ArrowForwardIcon}}
                    {...item}

                />
            )}
        />

    );
}


export {
    MoviesListPagination
}