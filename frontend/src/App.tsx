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
import NotFound from "./pages/NotFound";

import "./scss/app.scss";
import Terms from "./pages/Terms";
import AuthLayout from "./routes/AuthLayout";

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
              <Route path="/categories">
                <Route index element={<Categories />} />
                <Route
                  path=":scanid"
                  element={
                    <PrivateRoute>
                      <Scan />
                    </PrivateRoute>
                  }
                />
              </Route>
              <Route path="/terms" element={<Terms />} />
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
                path="/reports/:id"
                element={
                  <PrivateRoute>
                    <Report />
                  </PrivateRoute>
                }
              />
            </Route>
            <Route element={<AuthLayout />}>
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
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </AuthProvider>
  );
}

export default App;
