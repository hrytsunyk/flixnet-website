import React from 'react';
import {SearchMoviesList} from "../../components/SearchMoviesList/SearchMoviesList";
import Pagination from "@mui/material/Pagination";

const SearchPage = () => {
    return (
        <div>
            <SearchMoviesList/>
        </div>
    );
};

export {
    SearchPage
}