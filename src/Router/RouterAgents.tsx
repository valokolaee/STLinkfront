// src/App.tsx
import { Route, Routes } from "react-router-dom";
import Profi from "../pagesAgent/profi";
import Dashboard from "../pagesUser/Dashboard";



export default () =>

  <Routes >
    <Route path="/" element={<Dashboard/>} />
    <Route path="/mis" element={<Profi/>} />


  </Routes>


