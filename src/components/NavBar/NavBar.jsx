import React from "react";
import {AiOutlineHeart,AiOutlineShoppingCart} from 'react-icons/ai'
import {LuSearch} from 'react-icons/lu'
import {TbUserExclamation} from 'react-icons/tb'

const NavBar = () => {
  return (
    <>
      <header className="text-gray-400  body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-black mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-[20px] font-semibold">Mystic Friend</span>
          </a>
          <nav className="md:ml-auto md:mr-auto text-[20px] flex flex-wrap items-center text-base justify-center text-black">
            <a className="ml-[19px]  hover:text-gray-600 font-semibold">Trang Chủ</a>
            <a className="ml-[19px]  hover:text-gray-600 font-semibold">Cửa Hàng</a>
            <a className="ml-[19px]  hover:text-gray-600 font-semibold">Về chúng tôi</a>
            <a className="ml-[19px]  hover:text-gray-600 font-semibold">Liên hệ</a>
          </nav>
          <div className="inline-flex items-center  text-[25px] border-0 py-1 px-3 mt-4 md:mt-0 text-black text-xl">
            <TbUserExclamation className="mr-[30px]  hover:text-white"/>
            <LuSearch className="mr-[30px] hover:text-white"/>
            <AiOutlineHeart className="mr-[30px] hover:text-white"/>
            <AiOutlineShoppingCart className="mr-[30px] hover:text-white"/>
            
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
