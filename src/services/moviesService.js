import {axiosService} from "./axiosService";
import {urls} from "../configs/urls";

const moviesService = {
    getAll: (page = 1) => axiosService.get(urls.movies.moviesList, {params: page})
};

export {
    moviesService
}