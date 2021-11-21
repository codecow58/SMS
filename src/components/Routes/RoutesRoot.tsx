import React from "react";
import { HashRouter , Routes, Route } from "react-router-dom";
import Dashboard from "../Dashboard";
import Login from '../Login';
import Home from "../Home";
import GoBack from "../GoBack";
const RoutesRoot = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="home" element={<Home />} />
        <Route path="*" element={<GoBack />} />
      </Routes>
    </HashRouter>
  );
};

export default RoutesRoot;
