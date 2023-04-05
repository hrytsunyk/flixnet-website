import React from 'react';
import {Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/HomePage/HomePage";
import {MainLayout} from "./layouts/MainLayout";
import {MoviesPage} from "./pages/MoviesPage/MoviesPage";
import {TvShowsPage} from "./pages/TvShowsPage/TvShowsPage";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route path={"home"} element={<HomePage/>}/>
                <Route path={"movies"} element={<MoviesPage/>}/>
                <Route path={"tv_shows"} element={<TvShowsPage/>}/>
            </Route>
        </Routes>
    );
};

export {
    App
}