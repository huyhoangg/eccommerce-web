import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Badge,
} from "@material-tailwind/react";

import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineClose,
  AiOutlineLogin,
  AiOutlineUserAdd,
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
import { CartContext } from "~/contexts/CartContext";
import { AuthContext } from "~/contexts/AuthContext";
import axios from "axios";

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

  const cartProducts = useContext(CartContext);
  const { userInfo, setUserInfo } = useContext(AuthContext);

  async function handleLogOut(e) {
    e.preventDefault();
    try {
      await axios.post("/v1/auth/logout");
      setUserInfo(null);
      console.log("logout successful");
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <div className="text-gray-400 body-font">
        <div className="w-full bg-white border-b border-gray-200 fixed top-0 z-50">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <Link
              to="/"
              className="flex title-font font-medium items-center text-black mb-4 md:mb-0"
            >
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
            <div className="inline-flex items-center text-[25px] border-0 py-1 px-3 mt-4 md:mt-0 text-black text-xl">
              <Menu placement="bottom-start">
                <MenuHandler className="cursor-pointer">
                  {!userInfo ? (
                    <button>
                      {" "}
                      <TbUserExclamation className="mr-[30px]  hover:text-gray-800" />
                    </button>
                  ) : (
                    <h3>hi, {userInfo.username} !</h3>
                  )}
                </MenuHandler>
                <MenuList>
                  {userInfo ? (
                    <>
                      <MenuItem className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="h-4 w-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <Typography variant="small" className="font-normal">
                          Thông tin cá nhân
                        </Typography>
                      </MenuItem>
                      <hr className="my-2 border-blue-gray-50" />
                      <MenuItem
                        className="flex items-center gap-2"
                        onClick={handleLogOut}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="h-4 w-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5.636 5.636a9 9 0 1012.728 0M12 3v9"
                          />
                        </svg>
                        <Typography variant="small" className="font-normal">
                          Đăng xuất
                        </Typography>
                      </MenuItem>
                    </>
                  ) : (
                    <>
                      <MenuItem className="py-0 px-0 flex">
                        <AiOutlineLogin />
                        <Link to="/login" className="block w-full py-2 px-3">
                          {" "}
                          Đăng Nhập
                        </Link>
                      </MenuItem>
                      <MenuItem className="py-0 px-0 flex">
                        <AiOutlineUserAdd />
                        <Link to="/register" className="block w-full py-2 px-3">
                          {" "}
                          Đăng Ký
                        </Link>
                      </MenuItem>
                    </>
                  )}
                </MenuList>
              </Menu>
              <LuSearch className="mr-[30px] hover:text-gray-800" />
              <AiOutlineHeart className="mr-[30px] hover:text-gray-800" />
              <Badge content={cartProducts.getTotalQuantity()}>
                <AiOutlineShoppingCart
                  onClick={openDrawerCart}
                  className="mr-[30px] hover:text-gray-800"
                />
              </Badge>
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
