import React from "react";
import { Login } from "./pages/login";
import { CreateAccount } from "./pages/create-account";
import { Home } from "./pages/home";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';


export default function App(){
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/create-account" element={<CreateAccount />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </Router>
    );
}