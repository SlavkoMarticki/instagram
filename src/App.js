import React from "react";
import { Login } from "./pages/login";
import { CreateAccount } from "./pages/create-account";
import { Home } from "./pages/home";
import { UserProfile } from "./pages/user-profile";
import { AddImage } from "./pages/add-image";
import { Search } from "./pages/search";
import { SearchUserProfile } from "./pages/search-user-profile";
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
                {/** promeni naziv ruta */}
                <Route path="/userprofile" element={<UserProfile />} />
                <Route path="/addimage" element={<AddImage />} />
                <Route path="/search" element={<Search />} />
                <Route path="/searchuserprofile" element={<SearchUserProfile />} />
            </Routes>
        </Router>
    );
}