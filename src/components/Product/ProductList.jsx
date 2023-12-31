import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const ProductList = ({ products }) => {

  return (
    <>
     <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {products.map((item) => {
              const formattedPrice = item.price.toLocaleString('vi-VN');
              return (
                <div key={item._id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <Link to={`/store/${item._id}`}>
                    <a className="block relative h-48 rounded overflow-hidden">
                      <img
                        alt="ecommerce"
                        className="object-cover object-center w-full h-full block"
                        src={item.imageURLs[0]}
                      />
                    </a>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        {item.type}
                      </h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">
                        {item.name}
                      </h2>
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        {item.category?.map((cat, index) => (
                          <span key={index}>
                            {' '}
                            {cat.categoryName}, {'\xa0'}
                          </span>
                        ))}
                      </h3>
                      <p className="mt-1">{formattedPrice}đ</p>
                    </div>
                  </Link>
                </div>
              );
            })}

          </div>
        </div>
      </section>
    </>
  );
};
