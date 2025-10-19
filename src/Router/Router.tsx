// src/App.tsx
import { Route, Routes } from "react-router-dom";

// Pages
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile/Profile";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";


export default () =>

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/dashboard" element={<Dashboard />} />

    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/profile" element={<Profile />} />

  </Routes>


