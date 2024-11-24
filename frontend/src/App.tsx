import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./scss/app.scss";
import AppLayout from "./routes/AppLayout";
import Login from "./pages/Login";
import AuthRoute from "./routes/AuthRoute";
import Register from "./pages/Register";
import Scan from "./pages/Scan";
import PrivateRoute from "./routes/PrivateRoute";
import Profile from "./pages/profile";
import Categories from "./pages/Categories";
import Options from "./pages/Options";
import Payment from "./pages/Payment";
import Report from "./pages/Report";
import Error from "./pages/Error";

/*
  error

  home
  about
  terms
  subscriptions

  profile
  scans
  scan
  report
  ??? plugins -> popup ???
  options

*/

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path="/scan"
            element={
              <PrivateRoute>
                <Scan />
              </PrivateRoute>
            }
          />
          <Route
            path="/categories"
            element={
              <PrivateRoute>
                <Categories />
              </PrivateRoute>
            }
          />
          <Route
            path="/options"
            element={
              <PrivateRoute>
                <Options />
              </PrivateRoute>
            }
          />
          <Route
            path="/payment"
            element={
              <PrivateRoute>
                <Payment />
              </PrivateRoute>
            }
          />
          <Route
            path="/report"
            element={
              <PrivateRoute>
                <Report />
              </PrivateRoute>
            }
          />
        </Route>
        <Route
          path="/login"
          element={
            <AuthRoute>
              <Login />
            </AuthRoute>
          }
        />
        <Route
          path="/register"
          element={
            <AuthRoute>
              <Register />
            </AuthRoute>
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
