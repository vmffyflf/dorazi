import React, { useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Profile from "../routes/Profile";
import Navigation from "./Navigation";

const AppRouter = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    return (

        <Router>
            {isLoggedIn && <Navigation />}
                <Routes>
                    {isLoggedIn ? (
                        <>
                            <Route path="/" element={<Home />}></Route>
                        </>
                    ) : (
                        <Route path="/" element={<Auth />}></Route>
                        )}
                        <Routes path="/profile" element={<Profile />}></Routes>
                </Routes>
        </Router>
    );
};

export default AppRouter;
