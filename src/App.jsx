import {Routes, Route} from 'react-router-dom'
import HomePage from "~/pages/HomePage/HomePage";
import ListProductsPage from '~/pages/ListProductsPage/ListProductsPage';
import ProductDetail from '~/pages/ProductDetailPage/ProductDetailPage';
import Login from './components/Form/Login';
import Register from './components/Form/Register';
import ForgotPass from './components/Form/ForgotPass';


function App() {
  return (
    <div className="font-lora">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/store" element={<ListProductsPage />} />
        <Route path="/store/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpass" element={<ForgotPass />} />
      </Routes>
    </div>
  );
}

export default App;
