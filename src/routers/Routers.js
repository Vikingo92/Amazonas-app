import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Login from '../components/Login';
import { Registro } from '../components/Registro';
import Home from '../components/Home';
import CardDetails from "../components/CardDetails";
import Dashboard from "./Dashboard";
import Contenido from "../components/Contenido";

// Rutas
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { loginEmailPassword } from '../actions/actionLogin';
import { useDispatch } from "react-redux";

// Estado

export default function AppRouter() {

  const dispatch = useDispatch()

  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        dispatch(loginEmailPassword(user.uid, user.displayName))
        setIsLoggedIn(true)
      } else {
        setIsLoggedIn(false)
      }
      setChecking(false)
    })
  }, [dispatch, setChecking, setIsLoggedIn])


  if (checking) {
    return (
      <h1>Cargando....</h1>
    )
  }

  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<CardDetails />} />

        <Route path="/login" element={
          <PublicRoute isAuthenticated={isLoggedIn}>
            <Login />
          </PublicRoute>} />

        <Route path="/registro" element={
          <PublicRoute isAuthenticated={isLoggedIn}>
            <Registro />
          </PublicRoute>
        } />

        <Route path="/*" element={
          <PrivateRoute isAuthenticated={isLoggedIn}>
            <Dashboard/>
          </PrivateRoute>
        } />

      </Routes>
    </Router>
  );
}
