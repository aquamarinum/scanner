import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import AuthProvider from "./hoc/AuthProvider";
import AppLayout from "./routes/AppLayout";
import AuthRoute from "./routes/AuthRoute";
import PrivateRoute from "./routes/PrivateRoute";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Scan from "./pages/Scan";
import Profile from "./pages/Profile";
import Categories from "./pages/Categories";
import Options from "./pages/Options";
import Payment from "./pages/Payment";
import Report from "./pages/Report";
import Error from "./pages/Error";

import "./scss/app.scss";

function App() {
  return (
    <AuthProvider>
      <Provider store={store}>
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
      </Provider>
    </AuthProvider>
  );
}

export default App;
