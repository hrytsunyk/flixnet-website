import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {useDispatch, useSelector} from "react-redux";
import {Link, useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {moviesActions} from "../../redux";


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

    }, [dispatch, query]);


    return (

        <Pagination
            sx={
                {
                    '.css-1v2lvtn-MuiPaginationItem-root':
                        {
                            color: 'white',
                            fontWeight:'900'
                        },
                    '.css-yuzg60-MuiButtonBase-root-MuiPaginationItem-root':
                        {
                            backgroundColor: 'rgba(255,255,255,0.1)',
                            color: 'white',
                            fontWeight:'900'
                        },
                    '.css-yuzg60-MuiButtonBase-root-MuiPaginationItem-root:hover':
                        {
                            backgroundColor: 'rgb(255,190,0)',
                            color: 'black',
                        },
                    '.css-yuzg60-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected':
                        {
                            backgroundColor: 'rgb(255,190,0)',
                            color: 'black',
                        },
                    '.css-yuzg60-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected:hover':
                        {
                            backgroundColor: 'rgb(255,190,0)',
                            color: 'black',

                        }
                }
            }
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