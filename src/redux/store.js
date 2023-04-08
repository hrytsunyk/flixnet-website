import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {moviesReducer} from "./slices/moviesSlice";
import {searchReducer} from "./slices/searchSlice";

const rootReducer = combineReducers({
    movies:moviesReducer,
    search:searchReducer
});

const setupStore = ()=>configureStore({
   reducer: rootReducer
})

export {
    setupStore
}