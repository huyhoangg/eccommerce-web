import Footer from "~/components/Footer/Footer";
import NavBar from "~/components/NavBar/NavBar";
import ProductDetail from "~/components/Product/ProductDetail";
import RelatedProduct from "~/components/Product/RelatedProduct";

const ProductDetailPage = () => {
  return (
    <div>
      <NavBar />
      <ProductDetail />
      <RelatedProduct />
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
