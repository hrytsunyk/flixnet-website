import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {useDispatch, useSelector} from "react-redux";
import {Link, useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {moviesActions} from "../../redux";
import './Pagination.css';



const SearchingListPagination = () => {
    const dispatch = useDispatch();
    const {totalPages} = useSelector(state => state.search);


    const [query] = useSearchParams({page: '1'});


    const queryPageNumber = query.get('page');
    const queryName = query.get('name');

    useEffect((e) => {
        dispatch(moviesActions.getAll({page: queryPageNumber, name: queryName}))
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })

    }, [queryName, queryPageNumber, dispatch, query]);


    return (

        <Pagination
            count={+totalPages}
            page={+queryPageNumber}
            renderItem={(item) => (
                <PaginationItem
                    key={item}
                    component={Link}
                    to={`/search/movies?page=${item.page}&name=${queryName}`}
                    slots={{previous: ArrowBackIcon, next: ArrowForwardIcon}}
                    {...item}
                />
            )}
        />

    );
}


export {
    SearchingListPagination
}