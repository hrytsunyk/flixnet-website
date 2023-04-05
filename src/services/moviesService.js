import {axiosService} from "./axiosService";
import {urls} from "../config/urls";

const moviesService = {
    getAll: ()=> axiosService.get(urls.movies.moviesList)
};

export {
    moviesService
}