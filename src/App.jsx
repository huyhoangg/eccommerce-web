import { Routes, Route } from "react-router-dom";
import HomePage from "~/pages/HomePage/HomePage";
import ListProductsPage from "~/pages/ListProductsPage/ListProductsPage";
import ProductDetailPage from "~/pages/ProductDetailPage/ProductDetailPage";
import LoginPage from "~/pages/AuthenticPage/LoginPage";
import RegisterPage from "~/pages/AuthenticPage/RegisterPage";
import ForgotPage from "~/pages/AuthenticPage/ForgotPage";
import CartProvider from "./contexts/CartContext";
import Contact from "~/pages/informationPage/ContactPage";
import AboutUs from "~/pages/informationPage/AboutUsPage";
import FAQPage from "~/pages/informationPage/FAQPage"

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
          <Route path="/contact" element={<Contact />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/faq/*" element={<FAQPage />} />

        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
