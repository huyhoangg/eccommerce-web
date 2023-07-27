import { Routes, Route } from "react-router-dom";
import HomePage from "~/pages/HomePage/HomePage";
import ListProductsPage from "~/pages/ListProductsPage/ListProductsPage";
import ProductDetailPage from "~/pages/ProductDetailPage/ProductDetailPage";
import Login from "./components/Form/Login";
import Register from "./components/Form/Register";
import ForgotPass from "./components/Form/ForgotPass";
import CartProvider from "./contexts/CartContext";

function App() {
  return (
    <div className="font-lora">
      <CartProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/store" element={<ListProductsPage />} />
          <Route path="/store/:id" element={<ProductDetailPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotpass" element={<ForgotPass />} />
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
