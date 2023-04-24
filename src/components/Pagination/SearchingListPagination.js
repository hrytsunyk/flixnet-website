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
    const {searchedMovies, loading, totalPages, errors} = useSelector(state => state.search);


    const [query] = useSearchParams({page: '1'});


    const queryPageNumber = query.get('page');
    const queryName = query.get('name');
    // const genreId = query.get('with_genres');

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
                            color: 'white'
                        },
                    '.css-yuzg60-MuiButtonBase-root-MuiPaginationItem-root':
                        {
                            backgroundColor: 'rgba(255,255,255,0.11)',
                            color: 'white'
                        },
                    '.css-yuzg60-MuiButtonBase-root-MuiPaginationItem-root:hover':
                        {
                            backgroundColor: 'rgb(255,190,0)',
                        },
                    '.css-yuzg60-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected':
                        {
                            backgroundColor: 'rgb(255,190,0)',
                        },
                    '.css-yuzg60-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected:hover':
                        {
                            backgroundColor: 'rgb(255,190,0)',
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