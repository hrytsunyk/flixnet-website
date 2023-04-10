import {axiosService} from "./axiosService";
import {urls} from "../configs/urls";
import {queries} from "@testing-library/react";

const moviesService = {
    getAll: (page = '1') => axiosService.get(urls.movies.moviesList, {params: page}),
    getById:(movieId)=> axiosService.get(urls.movies.movieId(movieId)),

    getSearching:(page='1',name) => axiosService.get(urls.search.searchList, {params:{page,query:name}})
};

export {
    moviesService
}