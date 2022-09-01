 import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import SignUpForm from "./Components/Forms/SignUpForm";
import LogInForm from "./Components/Forms/LogInForm";

import About from './Sections/Navigation/About/About';
import Contact from './Sections/Navigation/Contact/Contact';
import Stories from './Sections/Navigation/Stories/Stories';

import {BrowserRouter, Route, Routes} from "react-router-dom";

import PageNotFound from './Error-Handlers/404';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<App/>}/>
                <Route path={"/About"} element={<PageNotFound/>}/>
                <Route path={"/Contact"} element={<PageNotFound/>}/>
                <Route path={"/Stories"} element={<PageNotFound/>}/>
                <Route path={"/SignUp"} element={<SignUpForm/>}/>
                <Route path={"/LogIn"} element={<LogInForm/>}/>
                <Route path={"*"} element={<PageNotFound/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
