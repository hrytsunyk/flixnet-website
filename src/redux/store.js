import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {moviesReducer} from "./slices/moviesSlice";
import {searchReducer} from "./slices/searchSlice";
import {genreReducer} from "./slices/genreSlice";

const rootReducer = combineReducers({
    movies:moviesReducer,
    search:searchReducer,
    genres: genreReducer
});

const setupStore = ()=>configureStore({
   reducer: rootReducer
})

export {
    setupStore
}