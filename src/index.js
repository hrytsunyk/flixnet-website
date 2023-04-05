import React from 'react';
import ReactDOM from 'react-dom/client';
import '@csstools/normalize.css';
import {App} from './App';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import {setupStore} from "./redux/slices/store";
import {Provider} from "react-redux";

const store = setupStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);

