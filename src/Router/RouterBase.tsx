import { Route, Routes } from "react-router-dom";
import App from "../App";
import '../css/btn.css';
import '../css/custom-select.css';
import '../css/form-checkbox.css';
import '../css/form-container.css';
import '../css/form-field.css';
import '../css/form-grid.css';
import '../css/input-active.css';
import '../css/root.css';
import '../css/textarea.css';
import RouterAgents from "./RouterAgents";
import Home from "../pagesUser/Home";
 


export default () =>

  <Routes>
    <Route path="/" element={<Home />} />

    <Route path="/*" element={<App />} />
    <Route path="/panel/*" element={<RouterAgents />} />
    {/* <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/Monitoring" element={<Skeleton />} />
    <Route path="/withdraw" element={<Withdraw />} />
    <Route path="/wallets" element={<Wallets />} />
    <Route path="/wallet/:id" element={<Wallet />} />
    <Route path="/addWallet" element={<AddWallet />} />

    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/Profile" element={<Profile />} />
    <Route path="/News" element={<NewsAndBlog />} /> */}

  </Routes>


