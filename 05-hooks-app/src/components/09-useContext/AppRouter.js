import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AboutScreen from "./AboutScreen";
import LoginScreen from "./LoginScreen";
import HomeScreen from "./HomeScreen";
import { NavBar } from "./NavBar";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="about" element={<AboutScreen />} />
            <Route path="login" element={<LoginScreen />} />
            <Route path="*" index element={<HomeScreen />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
