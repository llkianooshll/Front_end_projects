import React, { useState } from "react";
import Navbar from "./components/navbar";
import { Route,Routes } from "react-router-dom";
import Profile from "./components/profile";
import Home from "./components/home";
import Search from "./components/search";
import Add from "./components/add";
import Context from "./context/StateContext";
const App = () => {
    const [userPrf, setUserPrf] = useState(
        {
            usernamePrf : "llkianooshll", posts : 0, followers : 64, following: 102
        }
    )
    return (
        <>
        
            <Context.Provider value={userPrf}>
                <Navbar />
            <div>
                <Routes>
                    <Route path="profile" Component={Profile}/>
                    <Route path="/" Component={Home}/>
                    <Route path="search" Component={Search}/>
                    <Route path="add" Component={Add}/>
                </Routes>
            </div>
            </Context.Provider>
        </>
    );
}

export default App;