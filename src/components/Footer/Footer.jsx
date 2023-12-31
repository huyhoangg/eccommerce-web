import React from "react";
import { Textarea } from "@material-tailwind/react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col ">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-3 text-xl">Mystic friend</span>
            </a>
            <p className="mt-2 text-sm text-gray-500">Địa chỉ shop</p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-52 -mb-10 md:mt-0 mt-10 md:text-left text-center ">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font text-sm font-semibold text-gray-600 tracking-[1px]  mb-6">LINKS</h2>
              <nav className="list-none mb-10 text-black">
                <li className="mb-6">
                  <a href="" className="hover:underline">
                    Trang chủ
                  </a>
                </li>
                <li className="mb-6">
                  <a href="" className="hover:underline">
                    Cửa hàng
                  </a>
                </li>
                <li className="mb-6">
                  <a href="" className="hover:underline">
                    Về chúng tôi
                  </a>
                </li>
                <li className="mb-6">
                  <a href="" className="hover:underline">
                  Liên hệ
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font text-sm font-semibold text-gray-600 tracking-[1px]  mb-6">HỖ TRỢ</h2>
              <nav className="list-none mb-10 text-black">
                <li className="mb-6">
                <Link
                to="/faq/payment">
                  <a
                    href=""
                    className="hover:underline "
                  >
                    Các phương thức thanh toán
                  </a>
                  </Link>
                </li>
                <li className="mb-6">
                <Link
                to="/faq/refund">
                  <a
                    href=""
                    className="hover:underline"
                  >
                    Hoàn tiền
                  </a>
                  </Link>
                </li>
                <li className="mb-6">
                <Link
                to="/faq/policy">
                  <a
                    href=""
                    className="hover:underline"
                  >
                    Chính sách & quyền riêng tư
                  </a>
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font text-sm font-semibold text-gray-600 tracking-[1px]  mb-6">LIÊN HỆ</h2>
              <nav className="list-none mb-10 text-black">
                <li className="mb-6">
                  <form action="#" className="flex items-center">
                    <input type="email" placeholder="Enter your email address" className="border-b border-black outline-none pr-4  flex-1"/>
                    <button type="submit" className="border-b border-black  ml-2">SUBSCRIBE</button>
                  </form>
                </li>
              </nav>
            </div>
          
          </div>
        </div>
        <div className="">
          <div className=" container mx-auto py-4 px-5 "  > 
            <div className=" border-t flex flex-wrap flex-col sm:flex-row py-6" style={{borderColor: '#D9D9D9'}}>
              <p className="text-gray-700 text-sm text-center sm:text-left " >2022 Meubel House. All rights reverved
              </p>
              <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                <a className="text-gray-500">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="ml-3 text-gray-500">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="ml-3 text-gray-500">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
                <a className="ml-3 text-gray-500">
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </div>
    </footer>
    </div>


  );
}

export default Footer;
