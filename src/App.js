import React from 'react';
import {Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {MainLayout} from "./layouts/MainLayout";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route path={"home"} element={<HomePage/>}/>
            </Route>
        </Routes>
    );
};

export {
    App
}