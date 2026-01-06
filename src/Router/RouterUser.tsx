import { Route, Routes } from "react-router-dom";
import AddWallet from "../pagesUser/AddWallet";
import Dashboard from "../pagesUser/Dashboard";
import Home from "../pagesUser/Home";
import Login from "../pagesUser/Login";
import Skeleton from "../pagesUser/monitoring/Skeleton";
import NewsAndBlog from "../pagesUser/NewsAndBlog";
import Profile from "../pagesUser/Profile";
import Register from "../pagesUser/Register";
import Wallets from "../pagesUser/Wallets";
 import Withdraw from "../pagesUser/withdraw";
import Devices from "../pagesUser/Devices";
 import Wallet from "../pagesUser/Wallets/Wallet";
import Device from "../pagesUser/Devices/Device";



export default () =>

  <Routes>
    {/* <Route path="/" element={<Dashboard />} /> */}
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/Monitoring" element={<Skeleton />} />
    <Route path="/withdraw" element={<Withdraw />} />
    <Route path="/wallets" element={<Wallets />} />
    <Route path="/wallet/:id" element={<Wallet />} />
    <Route path="/Devices" element={<Devices />} />
    <Route path="/Device/:id/:imei" element={<Device />} />
    <Route path="/addWallet" element={<AddWallet />} />

    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/Profile" element={<Profile />} />
    <Route path="/News" element={<NewsAndBlog />} />

  </Routes>


