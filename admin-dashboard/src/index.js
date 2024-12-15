import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AuthProvider from "./hoc/AuthProvider";
import AppearanceProvider from "./hoc/AppearanceProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppearanceProvider>
    <AuthProvider>
      <App />
    </AuthProvider>
  </AppearanceProvider>
);
