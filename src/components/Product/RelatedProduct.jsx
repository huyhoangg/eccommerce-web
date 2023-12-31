import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function RelatedProduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await axios.get(`/v1/public/products?limit=4`);
        setProducts(response.data);
      } catch (e) {
        console.log(e);
      }
    }
    fetchProduct();
  }, []);

  return (
    <div>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Customers also purchased
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products &&
            products.map((product) => {
              const formattedPrice = product.price.toLocaleString('vi-VN');
              return (
                <div key={product._id} className="group relative">
                <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                  <Link to={`/store/${product._id}`}>
                    <img
                      src={product.imageURLs[0]}
                      alt="Product"
                      className="h-80 w-72 object-cover rounded-t-xl"
                    />
                    <div className="px-4 py-3 w-72">
                      <span className="text-gray-400 mr-3 uppercase text-xs">
                        {product.type}
                      </span>
                      <p className="text-lg font-bold text-black truncate block capitalize">
                        {product.name}
                      </p>
                      <div className="flex items-center">
                        <p className="text-lg font-semibold text-black cursor-auto my-3">
                          <span className="" style={{ textDecoration: 'underline', textDecorationOffset: '8px' }}>
                            đ
                          </span>
                          <span>{formattedPrice}</span>
                        </p>
                        <del>
                          <p className="text-sm text-gray-600 cursor-auto ml-2">
                            đ 1.599.000
                          </p>
                        </del>
                        <div className="ml-auto">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            className="bi bi-bag-plus"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                            />
                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                </div>
              )})}
        </div>
      </div>
    </div>
  );
}
