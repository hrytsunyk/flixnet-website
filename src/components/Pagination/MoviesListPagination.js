import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {useDispatch, useSelector} from "react-redux";
import {Link, useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {moviesActions} from "../../redux";


const MoviesListPagination = () => {
    const dispatch1 = useDispatch();

    const [query] = useSearchParams({page: '1'});
    const {loading} = useSelector(state => state.movies);

    const queryPageNumber = query.get('page');

    useEffect((e) => {
        dispatch1(moviesActions.getAll({page: queryPageNumber}))
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }, [dispatch1, query, queryPageNumber]);


    return (

        <Pagination
            sx={
                {
                    '.css-1v2lvtn-MuiPaginationItem-root':
                        {
                            color: 'white'
                        },
                    '.css-yuzg60-MuiButtonBase-root-MuiPaginationItem-root':
                        {
                            'background-color': 'rgba(255,255,255,0.11)',
                            color: 'white'
                        },
                    '.css-yuzg60-MuiButtonBase-root-MuiPaginationItem-root:hover':
                        {
                            'background-color': 'rgb(255,190,0)',
                        },
                    '.css-yuzg60-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected':
                        {
                            'background-color': 'rgb(255,190,0)',

                        }

                }
            }
            count={500}
            page={+queryPageNumber}
            renderItem={(item) => (
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
    MoviesListPagination
}