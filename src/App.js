import React from 'react';
import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {
    HomePage, MovieInfoPage, MoviesPage,
    NotFoundPage, SearchPage, SortedGenresPage, TvShowsPage
} from "./pages";

const App = () => {

    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route path={"home"} element={<HomePage/>}/>
                <Route path={"movies"} element={<MoviesPage/>}/>
                <Route path={"tv_shows"} element={<TvShowsPage/>}/>
                <Route path={"search/:movies"} element={<SearchPage/>}/>
                <Route path={"movie/:movieId"} element={<MovieInfoPage/>}/>
                <Route path={"genre/:with_genres"} element={<SortedGenresPage/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
};

export {
    App
}