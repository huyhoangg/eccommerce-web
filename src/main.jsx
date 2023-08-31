import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import ScrollToTop from "~/components/ScrollToTop/ScrollToTop.jsx";
import AuthProvider from "~/contexts/AuthContext.jsx";
import CartProvider from "~/contexts/CartContext.jsx";
import { ToastContainer, Flip } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <CartProvider>
            <ScrollToTop />
            <App />
            <ToastContainer
              transition={Flip}
              position="bottom-right"
              hideProgressBar
              autoClose={3000}
            />
          </CartProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
