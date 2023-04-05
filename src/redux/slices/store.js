import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {moviesReducer} from "./moviesSlice";

const rootReducer = combineReducers({
    movies:moviesReducer,
});

const setupStore = ()=>configureStore({
    rootReducer
})

export {
    setupStore
}