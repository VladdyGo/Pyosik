import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import SignUpForm from "./Components/Forms/SignUpForm";
import LogInForm from "./Components/Forms/LogInForm";

import {BrowserRouter, Route, Routes} from "react-router-dom";

import PageNotFound from './Error-Handlers/404';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<App/>}/>
                <Route path={"/SignUp"} element={<SignUpForm/>}/>
                <Route path={"/LogIn"} element={<LogInForm/>}/>
                <Route path={"*"} element={<PageNotFound/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
