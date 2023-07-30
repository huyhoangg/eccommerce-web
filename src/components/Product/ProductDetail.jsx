import React, { useContext } from "react";
import { useEffect, useState } from "react";
import {
  Breadcrumbs,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { SlArrowRight } from "react-icons/sl";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { GrNext,GrPrevious } from "react-icons/gr";

import { Link, useParams } from "react-router-dom";
import { CartContext } from "~/contexts/CartContext";

const data = [
  {
    label: "Description",
    value: "Description",
    // icon: Square3Stack3DIcon,
    desc: `It really matters and then like it really doesn't matter.
    What matters is the people who are sparked by it. And the people
    who are like offended by it, it doesn't matter.`,
  },
  {
    label: "Additional Information",
    value: "Additional Information",
    // icon: UserCircleIcon,
    desc: `Because it's about motivating the doers. Because I'm here
    to follow my dreams and inspire other people to follow their dreams, too.`,
  },
  {
    label: "Reviews [5]",
    value: "Reviews [5]",
    // icon: Cog6ToothIcon,
    desc: `We're not always in the position that we want to be at.
    We're constantly growing. We're constantly making mistakes. We're
    constantly trying to express ourselves and actualize our dreams.`,
  },
];

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const [activeTab, setActiveTab] = useState(data[0].value)
  // useEffect(() => {
  //   // Hiển thị TabPanel của tab đầu tiên khi trang được tải lại
  //   const firstTabPanel = document.querySelector(`[value="${activeTab}"]`);
  //   if (firstTabPanel) {
  //     firstTabPanel.style.display = "block";
  //   }
  // }, [activeTab]);
  

  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(
        `https://api.escuelajs.co/api/v1/products/${id}`
      );
      const data = await response.json();
      setProduct(data);
      setLoading(false);
    };
    fetchProduct();
  }, [id]);

  const cartProducts = useContext(CartContext)

  return (
    
    <div>
      <section className="overflow-hidden bg-white py-11 dark:bg-gray-800">
        <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
            <Breadcrumbs className="mt-[80px] mb-[30px] bg-white" separator={<SlArrowRight className=" flex w-3 h-3 " strokeWidth={1.5} />}>
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
            <a>{product && product.title}</a>

              </div>
          </Breadcrumbs>

          
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 md:w-1/2 ">
              <div className=" top-0 z-1 overflow-hidden ">
                <div className="relative mb-6 lg:mb-10 lg:h-2/4 ">
                    <Carousel
                      infiniteLoop = {true}
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
                        : product.images.map((image) => (
                          <div >
                            <img 
                              key={image}
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
                    {product && product.title}
                  </span>
                  <h2 className="max-w-xl mt-2 mb-6 text-2xl font-bold dark:text-gray-400 md:text-4xl">
                    {product.title}
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
                    {product && product.description}
                  </p>
                  <p className="inline-block mb-8 text-4xl font-bold text-gray-700 dark:text-gray-400 ">
                    <span>${product && product.price} </span>
                    <span className="text-base font-normal text-gray-500 line-through dark:text-gray-400">
                      $1500.99
                    </span>
                  </p>
                  <p className="text-green-600 dark:text-green-300 ">
                    7 in stock
                  </p>
                </div>
                <div className="flex items-center mb-8">
                  <h2 className="w-16 mr-6 text-xl font-bold dark:text-gray-400">
                    Colors:
                  </h2>
                  <div className="flex flex-wrap -mx-2 -mb-2">
                    <button className="p-1 mb-2 mr-2 border border-transparent hover:border-blue-400 dark:border-gray-800 dark:hover:border-gray-400 ">
                      <div className="w-6 h-6 bg-cyan-300"></div>
                    </button>
                    <button className="p-1 mb-2 mr-2 border border-transparent hover:border-blue-400 dark:border-gray-800 dark:hover:border-gray-400">
                      <div className="w-6 h-6 bg-green-300 "></div>
                    </button>
                    <button className="p-1 mb-2 border border-transparent hover:border-blue-400 dark:border-gray-800 dark:hover:border-gray-400">
                      <div className="w-6 h-6 bg-red-200 "></div>
                    </button>
                  </div>
                </div>
                <div className="flex items-center mb-8">
                  <h2 className="w-16 text-xl font-bold dark:text-gray-400">
                    Size:
                  </h2>
                  <div className="flex flex-wrap -mx-2 -mb-2">
                    <button className="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 dark:border-gray-400 hover:text-blue-600 dark:hover:border-gray-300 dark:text-gray-400">
                      XL
                    </button>
                    <button className="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 hover:text-blue-600 dark:border-gray-400 dark:hover:border-gray-300 dark:text-gray-400">
                      S
                    </button>
                    <button className="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 hover:text-blue-600 dark:border-gray-400 dark:hover:border-gray-300 dark:text-gray-400">
                      M
                    </button>
                    <button className="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 hover:text-blue-600 dark:border-gray-400 dark:hover:border-gray-300 dark:text-gray-400">
                      XS
                    </button>
                  </div>
                </div>
                {/* <div className="w-32 mb-8 ">
                  <label
                    htmlFor=""
                    className="w-full text-xl font-semibold text-gray-700 dark:text-gray-400"
                  >
                    Quantity
                  </label>
                  <div className="relative flex flex-row w-full h-10 mt-4 bg-transparent rounded-lg">
                    <button className="w-20 h-full text-gray-600 bg-gray-300 rounded-l outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-400">
                      <span className="m-auto text-2xl font-thin">-</span>
                    </button>
                    <input
                      type="number"
                      className="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-300 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black"
                      placeholder="1"
                    />
                    <button className="w-20 h-full text-gray-600 bg-gray-300 rounded-r outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-400">
                      <span className="m-auto text-2xl font-thin">+</span>
                    </button>
                  </div>
                </div> */}
                <div className="flex flex-wrap items-center -mx-4 ">
                  <div className="w-full px-4 mb-4 lg:w-1/2 lg:mb-0">
                    <button onClick={() => cartProducts.addToCart(product.id, product)} className="flex items-center justify-center w-full p-4 text-blue-500 border border-blue-500 rounded-md dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300">
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

{/*         
      <Tabs className="max-w-[50rem] overflow-visible">
        <TabsHeader
          className="rounded-none bg-transparent px-4 "
          indicatorProps={{
          className: "bg-transparent border-b-2 border-black shadow-none rounded-none",
        }}>
          {data.map(({ label, value }) => (
          <Tab key={value} value={value}
            onClick={() => setActiveTab(value)}
            className={activeTab === value ? "text-black" : "text-gray-600"}>
            {label}
          </Tab>
          ))}
          </TabsHeader>
          <TabsBody>
            {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}  >
              {desc}
            </TabPanel>
            ))}
          </TabsBody>
      </Tabs> */}

       <Tabs value={activeTab} className="max-w-[50rem] overflow-visible">
       <TabsHeader
          className="rounded-none bg-transparent px-4  "
          indicatorProps={{
          className: "bg-transparent border-b-2 border-black shadow-none rounded-none",
        }}>
        {data.map(({ label, value }) => (
          <Tab key={value} value={value}
            onClick={() => setActiveTab(value)}
            className={activeTab === value ? "text-black" : "text-gray-600"}>
            {label}
        </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value} className="text-justify">
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
      </div>
    </div>
  );
};

export default ProductDetail;
