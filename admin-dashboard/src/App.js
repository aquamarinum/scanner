import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useTheme } from "./hooks/useTheme";
import { useEffect } from "react";

import Management from "./pages/Management";
import Users from "./pages/Users";
import Scans from "./pages/Scans";
import Targets from "./pages/Targets";
import Vulnerabilities from "./pages/Vulnerabilities";
import Reports from "./pages/Reports";
import Analytics from "./pages/Analytics";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import PrivateRoute from "./components/navigation/PrivateRoute";
import AppLayout from "./components/navigation/AppLayout";
import AuthRoute from "./components/navigation/AuthRoute";

import "./scss/app.scss";

function App() {
  const { theme } = useTheme();

  useEffect(() => {
    if (theme === "dark") document.body.classList.add("dark");
    else document.body.classList.remove("dark");
  }, [theme]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/analytics" />} />

        <Route
          path="/login"
          element={
            <AuthRoute>
              <Login />
            </AuthRoute>
          }
        />

        <Route element={<AppLayout />}>
          <Route
            path="/analytics"
            element={
              <PrivateRoute>
                <Analytics />
              </PrivateRoute>
            }
          />

          <Route path="/management">
            <Route
              index
              element={
                <PrivateRoute>
                  <Management />
                </PrivateRoute>
              }
            />
            <Route
              path="/management/users"
              element={
                <PrivateRoute>
                  <Users />
                </PrivateRoute>
              }
            />
            <Route
              path="/management/scans"
              element={
                <PrivateRoute>
                  <Scans />
                </PrivateRoute>
              }
            />
            <Route
              path="/management/targets"
              element={
                <PrivateRoute>
                  <Targets />
                </PrivateRoute>
              }
            />
            <Route
              path="/management/vulnerabilities"
              element={
                <PrivateRoute>
                  <Vulnerabilities />
                </PrivateRoute>
              }
            />
            <Route
              path="/management/reports"
              element={
                <PrivateRoute>
                  <Reports />
                </PrivateRoute>
              }
            />
          </Route>
        </Route>
        <Route path="/notfound" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
