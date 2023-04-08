import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {useDispatch} from "react-redux";
import {Link, useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {moviesActions} from "../../redux/slices/moviesSlice";

const MyPagination = () => {
    const dispatch1 = useDispatch();

    const [query, setQuery] = useSearchParams({page: '1'});

    const queryPageNumber = query.get('page');

    useEffect((e) => {
        dispatch1(moviesActions.getAll({page: queryPageNumber}))
        window.scroll(0,0)

    }, [dispatch1, query]);



    return (
        <Pagination
            count={500}
            page={+queryPageNumber}
            renderItem={ (item) => (
                <PaginationItem
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
    MyPagination
}