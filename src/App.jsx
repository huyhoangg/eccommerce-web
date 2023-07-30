import { Routes, Route } from "react-router-dom";
import HomePage from "~/pages/HomePage/HomePage";
import ListProductsPage from "~/pages/ListProductsPage/ListProductsPage";
import ProductDetailPage from "~/pages/ProductDetailPage/ProductDetailPage";
import LoginPage from "~/pages/AuthenticPage/LoginPage";
import RegisterPage from "~/pages/AuthenticPage/RegisterPage";
import ForgotPage from "~/pages/AuthenticPage/ForgotPage";

import CartProvider from "./contexts/CartContext";

function App() {
  return (
    <div className="font-lora">
      <CartProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/store" element={<ListProductsPage />} />
          <Route path="/store/:id" element={<ProductDetailPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgotpass" element={<ForgotPage />} />
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
