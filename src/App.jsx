import {Routes, Route} from 'react-router-dom'
import HomePage from "~/pages/HomePage/HomePage";
import ListProductsPage from '~/pages/ListProductsPage/ListProductsPage';
import ProductDetail from '~/pages/ProductDetailPage/ProductDetailPage';

function App() {
  return (
    <div className="font-lora">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/store" element={<ListProductsPage />} />
        <Route path="/store/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
