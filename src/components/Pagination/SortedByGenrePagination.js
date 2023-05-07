import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {useDispatch, useSelector} from "react-redux";
import {Link, useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {sortedGenresActions} from "../../redux";


const SortedByGenrePagination = () => {
    const dispatch1 = useDispatch();

    const [query] = useSearchParams({page: '1'});
    const {totalPages} = useSelector(state => state.search);


    const genreId = query.get('with_genres');
    const queryPageNumber = query.get('page');
    const queryName = query.get('name');

    useEffect(() => {
        dispatch1(sortedGenresActions.sortedGenres({page: queryPageNumber, genreId}))
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }, [genreId, queryPageNumber, dispatch1])


    return (
        <Pagination
            sx={
                {
                    '.MuiPaginationItem-root':
                        {
                            color: 'white',
                            fontWeight:'900'
                        },
                    '.MuiButtonBase-root.MuiPaginationItem-root':
                        {
                            backgroundColor: 'rgba(255,255,255,0.1)',
                            color: 'white',
                            fontWeight:'900'
                        },
                    '.MuiButtonBase-root.MuiPaginationItem-root:hover':
                        {
                            backgroundColor: 'rgb(255,190,0)',
                            color: 'black',
                        },
                    '.MuiButtonBase-root.MuiPaginationItem-root.Mui-selected':
                        {
                            backgroundColor: 'rgb(255,190,0)',
                            color:'black',
                        },
                }
            }
            count={+totalPages}
            page={+queryPageNumber}
            renderItem={(item) => (
                <PaginationItem
                    component={Link}
                    to={`?page=${item.page}&with_genres=${genreId}&name=${queryName}`}
                    slots={{previous: ArrowBackIcon, next: ArrowForwardIcon}}
                    key={item}
                    {...item}
                />
            )}
        />

    );
}


export {
    SortedByGenrePagination
}