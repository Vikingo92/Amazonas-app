import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Login from '../components/Login';
import { Registro } from '../components/Registro';
import Home from '../components/Home';
import CardDetails from "../components/CardDetails";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<CardDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </Router>
  );
}
