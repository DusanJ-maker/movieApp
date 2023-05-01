import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./components/Home/Home";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import Burger from "./components/Header/Burger/Burger";
import Login from "./components/Login/Login";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <div className="app">
      <Burger />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="/movieDetail/:movieID" element={<MovieDetail />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
