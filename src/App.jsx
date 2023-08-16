import { Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";
import HomePage from "~/pages/HomePage/HomePage";
import ListProductsPage from "~/pages/ListProductsPage/ListProductsPage";
import ProductDetailPage from "~/pages/ProductDetailPage/ProductDetailPage";
import LoginPage from "~/pages/AuthenticPage/LoginPage";
import RegisterPage from "~/pages/AuthenticPage/RegisterPage";
import ForgotPage from "~/pages/AuthenticPage/ForgotPage";
import Contact from "~/pages/InformationPage/ContactPage";
import AboutUs from "~/pages/InformationPage/AboutUsPage";
import FAQPage from "~/pages/InformationPage/FAQPage"


import { useContext } from "react";
import { AuthContext } from "~/contexts/AuthContext";
import ProtectedRoutes from "~/components/ProtectedRoutes/ProtectedRoutes";

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

function App() {
  const { userInfo } = useContext(AuthContext);

  return (
    <div className="font-lora">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/store" element={<ListProductsPage />} />
        <Route path="/store/:id" element={<ProductDetailPage />} />
        <Route path="/login" element={!userInfo ? <LoginPage /> : <Navigate to="/store"/>} />
        <Route path="/register" element={!userInfo ? <RegisterPage /> : <Navigate to="/"/>} />
        <Route path="/forgotpass" element={<ForgotPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/faq/*" element={<FAQPage />} />
        {/* <Route element={<ProtectedRoutes />}>
          <Route path="/home" element={<Home />} />
        </Route> */}
      </Routes>
    </div>
  );
}

export default App;
