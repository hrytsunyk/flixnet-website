import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {moviesReducer} from "./slices/moviesSlice";
import {searchReducer} from "./slices/searchSlice";
import {genreReducer} from "./slices/genreSlice";
import {sortedByGenreReducer} from "./slices/sortedGenreSlice";


const rootReducer = combineReducers({
    movies:moviesReducer,
    search:searchReducer,
    genres: genreReducer,
    sortedGenres: sortedByGenreReducer
});

const setupStore = ()=>configureStore({
   reducer: rootReducer
})

export {
    setupStore
}