import {axiosService} from "./axiosService";
import {urls} from "../configs";

const moviesService = {
    getAll: (page = '1') => axiosService.get(urls.movies.moviesList, {params: page}),
    getById: (movieId) => axiosService.get(urls.movies.movieId(movieId)),

    getSearching: (page = '1', name) => axiosService.get(urls.search.searchList, {params: {page, query: name}}),
    getGenreList: () => axiosService.get(urls.genres.genresList),

    getSortByGenre: (page = '1',genreId) => axiosService.get(urls.genres.sortedList, {params: {page,with_genres: genreId}}),

    getVideoById:(movieId)=> axiosService.get(urls.videos.videosById(movieId)),

    getPopularList: ()=> axiosService.get(urls.movies.popularList)
};

export {
    moviesService
}