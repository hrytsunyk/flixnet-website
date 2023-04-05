import {axiosService} from "./axiosService";
import {urls} from "../configs/urls";

const moviesService = {
    getAll: ()=> axiosService.get(urls.movies.moviesList)
};

export {
    moviesService
}