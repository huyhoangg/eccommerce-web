import React, { useContext } from "react";
import { useEffect, useState } from "react";
import {
  Breadcrumbs,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Rating,
} from "@material-tailwind/react";
import { SlArrowRight } from "react-icons/sl";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { GrNext, GrPrevious } from "react-icons/gr";

import { Link, useNavigate, useParams } from "react-router-dom";
import { CartContext } from "~/contexts/CartContext";
import axios from "axios";
import { AuthContext } from "~/contexts/AuthContext";

const dataTab = [
  {
    label: "Description",
    value: "Description",
  },
  {
    label: "Additional Information",
    value: "Additional Information",
  },
  {
    label: "Reviews [5]",
    value: "Reviews [5]",
    desc: `We're not always in the position that we want to be at.
    We're constantly growing. We're constantly making mistakes. We're
    constantly trying to express ourselves and actualize our dreams.`,
  },
];

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const [reviews, setReviews] = useState(null);

  const [loading, setLoading] = useState(true);

  const [activeTab, setActiveTab] = useState(dataTab[0].value);
  // useEffect(() => {
  //   // Hiển thị TabPanel của tab đầu tiên khi trang được tải lại
  //   const firstTabPanel = document.querySelector(`[value="${activeTab}"]`);
  //   if (firstTabPanel) {
  //     firstTabPanel.style.display = "block";
  //   }
  // }, [activeTab]);

  const { id } = useParams();

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await axios.get(`/v1/public/products/${id}`);
        setProduct(response.data);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    }
    fetchProduct();
  }, [id]);

  useEffect(() => {
    async function fetchReview() {
      try {
        const response = await axios.get(`/v1/public/getProductReview/${id}`);
        setReviews(response.data);
      } catch (e) {
        console.log(e);
      }
    }
    fetchReview();
  }, [id]);

  const cartProducts = useContext(CartContext);
  const authContext = useContext(AuthContext);

  const navigate = useNavigate();

  return (
    <div>
      <section className="overflow-hidden bg-white py-11 dark:bg-gray-800">
        <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
          <Breadcrumbs
            className="mt-[80px] mb-[30px] bg-white"
            separator={
              <SlArrowRight className=" flex w-3 h-3 " strokeWidth={1.5} />
            }
          >
            <Link to="/" className="opacity-60 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              <span className="ml-1">Home</span>
            </Link>

            <Link to="/store" className="opacity-60">
              <span>Store</span>
            </Link>
            <div className="border-l border-black pl-[15px] ml-[7px] ">
              <a>{product && product.name}</a>
            </div>
          </Breadcrumbs>

          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 md:w-1/2 ">
              <div className=" top-0 z-1 overflow-hidden ">
                <div className="relative mb-6 lg:mb-10 lg:h-2/4 ">
                  <Carousel
                    infiniteLoop={true}
                    autoPlay
                    showIndicators
                    showStatus={false}
                    interval={5000}
                    renderArrowPrev={(clickHandler, hasPrev) => {
                      return (
                        <div
                          className={`${
                            hasPrev ? "absolute" : "hidden"
                          } top-0 bottom-0 left-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
                          onClick={clickHandler}
                        >
                          <GrPrevious className="w-9 h-9 text-white" />
                        </div>
                      );
                    }}
                    renderArrowNext={(clickHandler, hasNext) => {
                      return (
                        <div
                          className={`${
                            hasNext ? "absolute" : "hidden"
                          } top-0 bottom-0 right-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
                          onClick={clickHandler}
                        >
                          <GrNext className="w-9 h-9 text-white" />
                        </div>
                      );
                    }}
                  >
                    {loading
                      ? ""
                      : product.imageURLs.map((image, index) => (
                          <div key={index}>
                            <img
                              src={image}
                              alt="image 1"
                              className="w-[150px] h-full  object-cover "
                            />
                          </div>
                        ))}
                  </Carousel>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 ">
              <div className="lg:pl-20">
                <div className="mb-8 ">
                  <span className="text-lg font-medium text-rose-500 dark:text-rose-200">
                    {product && product.type}
                  </span>
                  <h2 className="max-w-xl mt-2 mb-6 text-2xl font-bold dark:text-gray-400 md:text-4xl">
                    {product.name}
                  </h2>
                  <div className="flex items-center mb-6">
                    <ul className="flex mr-2">
                      <li>
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                            viewBox="0 0 16 16"
                          >
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                            viewBox="0 0 16 16"
                          >
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                            viewBox="0 0 16 16"
                          >
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                            viewBox="0 0 16 16"
                          >
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                          </svg>
                        </a>
                      </li>
                    </ul>
                    <p className="text-xs dark:text-gray-400 ">
                      (2 customer reviews)
                    </p>
                  </div>
                  <p className="max-w-md mb-8 text-gray-700 dark:text-gray-400">
                    {product && product.describe?.split(".")[0]}
                  </p>
                  <p className="inline-block mb-8 text-4xl font-bold text-gray-700 dark:text-gray-400 ">
                    <span>${product && product.price} </span>
                    <span className="text-base font-normal text-gray-500 line-through dark:text-gray-400">
                      $1500.99
                    </span>
                  </p>
                  <p className="text-green-600 dark:text-green-300 ">
                    {product.stock} in stock
                  </p>
                </div>
                <div className="flex items-center mb-8">
                  <h2 className="w-50 mr-6 text-xl font-bold dark:text-gray-400">
                    Nhà sản xuất:
                  </h2>
                  <div className="flex flex-wrap -mx-2 -mb-2">
                    {" "}
                    {product.producer}
                  </div>
                </div>

                <div className="flex items-center mb-8">
                  <h2 className="w-50 mr-6 text-xl font-bold dark:text-gray-400">
                    Tác giả:
                  </h2>
                  <div className="flex flex-wrap -mx-2 -mb-2">
                    {" "}
                    {product.author}
                  </div>
                </div>

                <div className="flex items-center mb-8">
                  <h2 className="w-50 mr-6 text-xl font-bold dark:text-gray-400">
                    Thể loại:
                  </h2>
                  <div className="flex flex-wrap -mx-2 -mb-2">
                    {" "}
                    {product.category?.map((cat, index) => (
                      <span
                        key={index}
                        className="hover:underline hover:cursor-pointer hover:text-blue-500"
                      >
                        {" "}
                        {cat.categoryName}, {"\xa0"}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center -mx-4 ">
                  <div className="w-full px-4 mb-4 lg:w-1/2 lg:mb-0">
                    <button
                      onClick={() => {
                        authContext.userInfo
                          ? cartProducts.addToCart(product._id, product)
                          : navigate("/login");
                      }}
                      className="flex items-center justify-center w-full p-4 text-blue-500 border border-blue-500 rounded-md dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300"
                    >
                      Add to Cart
                    </button>
                  </div>
                  <div className="w-full px-4 mb-4 lg:mb-0 lg:w-1/2">
                    <button className="flex items-center justify-center w-full p-4 text-blue-500 border border-blue-500 rounded-md dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300">
                      Add to wishlist
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-center  ">
        <Tabs value={activeTab} className="max-w-[50rem] overflow-visible">
          <TabsHeader
            className="rounded-none bg-transparent px-4  "
            indicatorProps={{
              className:
                "bg-transparent border-b-2 border-black shadow-none rounded-none",
            }}
          >
            {dataTab.map(({ label, value }) => (
              <Tab
                key={value}
                value={value}
                onClick={() => setActiveTab(value)}
                className={activeTab === value ? "text-black" : "text-gray-600"}
              >
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            <TabPanel
              key={dataTab[0].value}
              value={dataTab[0].value}
              className="text-justify"
            >
              {product.describe}
            </TabPanel>
            <TabPanel
              key={dataTab[1].value}
              value={dataTab[1].value}
              className="text-justify"
            >
              <li>IBSN: {product.ibsn}</li>
              <li>bao gồm: {product.include}</li>
              <li>IBSN: {product.ibsn}</li>
            </TabPanel>
            <TabPanel
              key={dataTab[2].value}
              value={dataTab[2].value}
              className="text-justify"
            >
              {reviews ? (
                reviews.map((review) => (
                  <div
                    key={review._id}
                    className="pt-10 lg:grid lg:grid-cols-12 lg:gap-x-8"
                  >
                    <div className="lg:col-start-5 lg:col-span-8 xl:col-start-4 xl:col-span-9 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:items-start">
                      <div className="flex items-center xl:col-span-1">
                        <div className="flex items-center">
                          <Rating value={review.rating} readonly />
                        </div>
                        <p className="ml-3 text-sm text-gray-700">
                          <span className="sr-only"> out of 5 stars</span>
                        </p>
                      </div>

                      <div className="mt-4 lg:mt-6 xl:mt-0 xl:col-span-2">
                        <h3 className="text-sm font-medium text-green-500">
                          {review.content}
                        </h3>
                      </div>
                    </div>

                    <div className="mt-6 flex items-center text-sm lg:mt-0 lg:col-start-1 lg:col-span-4 lg:row-start-1 lg:flex-col lg:items-start xl:col-span-3">
                      <p className="font-medium text-gray-900">
                        {review.reviewer.username}
                      </p>
                      <time className="ml-4 border-l border-gray-200 pl-4 text-gray-500 lg:ml-0 lg:mt-2 lg:border-0 lg:pl-0">
                        {review.reviewDay.split("T")[0]}
                      </time>
                    </div>
                  </div>
                ))
              ) : (
                <h1 className="text-center text-red-400">None of review yet</h1>
              )}
            </TabPanel>
          </TabsBody>
        </Tabs>
      </div>
    </div>
  );
};

export default ProductDetail;
