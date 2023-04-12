import React from 'react';

import {MemoryRouter, Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/HomePage/HomePage";
import {MainLayout} from "./layouts/MainLayout";
import {MoviesPage} from "./pages/MoviesPage/MoviesPage";
import {TvShowsPage} from "./pages/TvShowsPage/TvShowsPage";
import {useSelector} from "react-redux";
import {SearchPage} from "./pages/SearchPage/SearchPage";
import {NotFoundPage} from "./pages/NotFoundPage/NotFoundPage";
import {MovieInfoPage} from "./pages/MovieInfoPage/MovieInfoPage";

const App = () => {

    return (
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route path={"home"} element={<HomePage/>}/>
                    <Route path={"movies"} element={<MoviesPage/>}/>
                    <Route path={"tv_shows"} element={<TvShowsPage/>}/>
                    <Route path={"search/:movies"} element={<SearchPage/>}/>
                    <Route path={"movie/:movieId"} element={<MovieInfoPage/>}/>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
    );
};

export {
    App
}