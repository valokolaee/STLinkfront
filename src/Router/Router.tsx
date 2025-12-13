// src/App.tsx
import { Route, Routes } from "react-router-dom";

// Pages
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile/Profile";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Withdraw from "../pages/withdraw";
import Wallet from "../pages/Wallet";
import '../css/btn.css'
import '../css/custom-select.css'
import '../css/form-checkbox.css'
import '../css/form-container.css'
import '../css/form-field.css'
import '../css/form-grid.css'
import '../css/input-active.css'
import '../css/textarea.css'
import '../css/root.css'
import AddWallet from "../pages/AddWallet";



export default () =>

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/withdraw" element={<Withdraw />} />
    <Route path="/wallets" element={<Wallet />} />
    <Route path="/addWallet" element={<AddWallet />} />

    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/profile" element={<Profile />} />

  </Routes>


