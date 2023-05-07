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



const TopRatedListPagination = () => {
    const dispatch = useDispatch();

    const [query] = useSearchParams({page: '1'});

    const queryPageNumber = query.get('page');


    useEffect(()=>{
        dispatch(moviesActions.getTopRated({page: queryPageNumber}))
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    },[dispatch,queryPageNumber])


    return (

        <Pagination
            // sx={
            //     {
            //         '.MuiPaginationItem-root':
            //             {
            //                 color: 'white',
            //                 fontWeight:'900'
            //             },
            //         '.MuiButtonBase-root.MuiPaginationItem-root':
            //             {
            //                 backgroundColor: 'rgba(255,255,255,0.1)',
            //                 color: 'white',
            //                 fontWeight:'900'
            //             },
            //         '.MuiButtonBase-root.MuiPaginationItem-root:hover':
            //             {
            //                 backgroundColor: 'rgb(255,190,0)',
            //                 color: 'black',
            //             },
            //         '.MuiButtonBase-root.MuiPaginationItem-root.Mui-selected':
            //             {
            //                 backgroundColor: 'rgb(255,190,0)',
            //                 color:'black',
            //             },
            //     }
            // }
            count={500}
            page={+queryPageNumber}
            renderItem={(item) => (
                <PaginationItem
                    key={item}
                    component={Link}
                    to={`/home?page=${item.page}`}
                    slots={{previous: ArrowBackIcon, next: ArrowForwardIcon}}
                    {...item}

                />
            )}
        />

    );
}


export {
    TopRatedListPagination
}