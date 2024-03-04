import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "./context/AuthContext.jsx";
import { LoadingBar } from "./context/LoadingBar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <LoadingBar>
          <App />
        </LoadingBar>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
