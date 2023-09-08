import axios from "axios";
import React, { useEffect, useState } from "react";

function Section() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await axios.get(
          `/v1/public/products/64e85a3145ab73846f108110`
        );
        setProduct(response.data);
      } catch (e) {
        console.log(e);
      }
    }
    fetchProduct();
  }, []);

  return (
    <section className="bg-primary">
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8 ">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
          <div className="grid p-6 bg-gray-100 rounded place-content-center sm:p-8">
            <div className="max-w-md mx-auto text-center lg:text-left">
              <header>
                <h2 className="text-xl font-bold text-center text-gray-900 sm:text-3xl">
                  {product?.name}
                </h2>

                <p className="mt-4 text-gray-500 text-center">
                  Our Special Present
                </p>
              </header>
            </div>
            <p className="mt-4 text-center text-gray-500">
              {product && product.price.toLocaleString("vi-vn")} VND
            </p>
            <button className="flex mt-5 items-center justify-center w-full p-4 text-blue-500 border border-blue-500 rounded-md dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300">
              add to cart
            </button>
          </div>

          <div className="lg:col-span-2 lg:py-8">
            <ul className="grid grid-cols-2 gap-4">
              <li>
                <a href="#" className="block group">
                  <img
                    src={product?.imageURLs[0]}
                    alt=""
                    className="object-cover w-full rounded aspect-square"
                  />

                  <div className="mt-3"></div>
                </a>
              </li>

              <li>
                <a href="#" className="block group">
                  <img
                    src={product?.imageURLs[1]}
                    alt=""
                    className="object-cover w-full rounded aspect-square"
                  />

                  <div className="mt-3"></div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section;
