import { useState } from "react";
import { Link } from "react-router-dom";

import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineClose,
} from "react-icons/ai";
import { LuSearch } from "react-icons/lu";
import { TbUserExclamation } from "react-icons/tb";

import {
  Drawer,
  Typography,
  IconButton,
  ThemeProvider,
} from "@material-tailwind/react";
import Cart from "../Cart/Cart";

const themeCart = {
  drawer: {
    styles: {
      base: {
        overlay: {
          position: "fixed",
        },
      },
    },
  },
};

const NavBar = () => {
  const [openCart, setOpenCart] = useState(false);
  const openDrawerCart = () => setOpenCart(true);
  const closeDrawerCart = () => setOpenCart(false);

  return (
    <>
      <div className="text-gray-400 body-font">
        <div className="w-full bg-white border-b border-gray-200 fixed top-0 z-50">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <Link to="/" className="flex title-font font-medium items-center text-black mb-4 md:mb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-3 text-[20px] font-semibold">
                Mystic Friend
              </span>
            </Link>
            <nav className="md:ml-auto md:mr-auto text-[20px] flex flex-wrap items-center text-base justify-center text-black">
              <Link
                to="/"
                className="ml-[19px]  hover:text-gray-600 font-semibold"
              >
                Trang Chủ
              </Link>
              <Link
                to="/store"
                className="ml-[19px]  hover:text-gray-600 font-semibold"
              >
                Cửa Hàng
              </Link>
              <Link
                to="/about"
                className="ml-[19px]  hover:text-gray-600 font-semibold"
              >
                Về chúng tôi
              </Link>
              <Link
                to="/contact"
                className="ml-[19px]  hover:text-gray-600 font-semibold"
              >
                Liên hệ
              </Link>
            </nav>
            <div className="inline-flex items-center  text-[25px] border-0 py-1 px-3 mt-4 md:mt-0 text-black text-xl">
              <TbUserExclamation className="mr-[30px]  hover:text-white" />
              <LuSearch className="mr-[30px] hover:text-white" />
              <AiOutlineHeart className="mr-[30px] hover:text-white" />
              <AiOutlineShoppingCart onClick={openDrawerCart} className="mr-[30px] hover:text-white" />
            </div>
          </div>
        </div>
      </div>
      <ThemeProvider value={themeCart}>
        <Drawer
          placement="right"
          open={openCart}
          onClose={closeDrawerCart}
          className="p-4"
          size={400}
        >
          <div className="mb-6 flex items-center justify-between">
            <Typography variant="h5" color="blue-gray">
              Your Cart
            </Typography>
            <IconButton
              variant="text"
              color="blue-gray"
              onClick={closeDrawerCart}
            >
              <AiOutlineClose strokeWidth={2} className="h-5 w-5" />
            </IconButton>
          </div>
          <Cart />
        </Drawer>
      </ThemeProvider>
    </>
  );
};

export default NavBar;
