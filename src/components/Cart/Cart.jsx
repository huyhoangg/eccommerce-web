import {
  Button,
  Checkbox,
  Chip,
  Input,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { CartContext } from "~/contexts/CartContext";

function CartItems() {
  const shipping = 5000;
  const shipFormat = shipping.toLocaleString('vi-VN')

  const cartProducts = useContext(CartContext);
  const formattedCart = cartProducts.getTotalPrice().toLocaleString('vi-VN');

  const [total, setTotal] = useState(0);
  const [check, setCheck] = useState(false);
  const [promo, setPromo] = useState("");
  const [promoStatus, setPromoStatus] = useState("Discount code");
  const [validPromo, setValidPromo] = useState(null);
  const discount = validPromo
  ? Math.round(validPromo.value * cartProducts.getTotalPrice())
  : 0;
const formattedDiscount = discount.toLocaleString('vi-VN');


  async function handlePay(e) {
    e.preventDefault();
    if (cartProducts.products.length == 0) {
      toast.error("Bạn chưa thêm sản phẩm !", { toastId: 0 });
      return;
    }
    let orderId = "";
    try {
      const res = await axios.post(`/v1/user/createInvoice`, {
        amount: total,
        promoId: validPromo?._id,
      });
      orderId = res.data._id;
    } catch (e) {
      console.log(e);
      toast.error("fail to create invoice!");
    }
    try {
      const res = await axios.post("/v1/user/create_payment_url", {
        amount: total,
        orderId,
      });
      const redirectUrl = res.data.redirectUrl;
      console.log(res.data);
      window.location.href = redirectUrl;
    } catch (e) {
      console.log(e);
      toast.error("something went wrong!");
    }
  }

  const handleVoucher = async (voucherId) => {
    if (cartProducts.products.length == 0) {
      toast.error("Bạn chưa thêm sản phẩm !", { toastId: 0 });
      return;
    }
    const response = await axios.get(`/v1/user/getUserVoucher/${voucherId}`);
    console.log(response.data);
    if (
      response.data == "invalid voucher, try again !" ||
      response.data == "voucher not existed anymore !"
    ) {
      setPromoStatus(response.data);
      setPromo("");
      setValidPromo(null);
    } else {
      setValidPromo(response.data);
    }
  };

  
  useEffect(() => {
    setTotal(
      cartProducts.getTotalPrice() +
      shipping  -
        (validPromo
          ? Math.round(validPromo.value * cartProducts.getTotalPrice())
          : 0)
    );
  }, [cartProducts.products, validPromo]);

  return (
    <section className="mt-6">
      <div className="">
        <div>
          <div className="overflow-y-auto lg:max-h-[50vh] md:max-h-[600px] max-h-[500px] overscroll-contain pt-6">
            <ul className="-my-8">
              {cartProducts.products &&
                cartProducts.products.map((product) => {
                  const formattedPrice = product.productDetail.price.toLocaleString('vi-VN');
                  return (
                  <li
                    key={product.productId}
                    className="flex flex-col space-y-3 py-6 pr-2 text-left sm:flex-row sm:space-x-5 sm:space-y-0"
                  >
                    <div className="shrink-0 flex justify-center items-center">
                      <img
                        className="h-24 w-24 max-w-full rounded-lg object-cover"
                        src={product.productDetail.imageURLs[0]}
                        alt=""
                      />
                    </div>

                    <div className="relative flex flex-1 flex-col justify-between">
                      <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                        <div className="pr-8 sm:pr-5">
                          <p className="text-base font-semibold text-gray-900">
                            {product.productDetail.name}
                          </p>
                          <p className="mx-0 mt-1 mb-0 text-sm text-gray-400">
                            {product.productDetail.category.categoryName}
                          </p>
                        </div>

                        <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                          <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">
                            {formattedPrice}đ
                          </p>
                        </div>
                        <div className="relative flex flex-row w-full h-10 mt-4 bg-transparent rounded-lg">
                          <button
                            onClick={() =>
                              cartProducts.removeFromCart(product.productId)
                            }
                            className="w-20 h-full text-gray-600 bg-gray-300 rounded-l outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-400"
                          >
                            <span className="m-auto text-2xl font-thin">-</span>
                          </button>
                          <p className="flex justify-center items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-300 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black">
                            {cartProducts.getQuantity(product.productId)}
                          </p>
                          <button
                            onClick={() => {
                              cartProducts.addToCart(
                                product.productId,
                                product
                              );
                            }}
                            className="w-20 h-full text-gray-600 bg-gray-300 rounded-r outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-400"
                          >
                            <span className="m-auto text-2xl font-thin">+</span>
                          </button>
                        </div>
                      </div>

                      <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                        <button
                          type="button"
                          className="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900"
                          onClick={() => {
                            cartProducts.removeAllCart(product.productId);
                          }}
                        >
                          <svg
                            className="h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M6 18L18 6M6 6l12 12"
                              className=""
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </li>
                )})}
            </ul>
          </div>

          <div className="">
            <div className="mb-2 mt-2 relative flex w-full justify-between">
              <div className="mr-2 flex-grow">
                <div className=" pt-0">
                  <input
                    placeholder={promoStatus}
                    type="text"
                    value={promo}
                    onChange={(e) => setPromo(e.target.value)}
                    className="border-blueGray-300 px-3 py-2 text-sm w-full placeholder-blueGray-200 text-blueGray-700 relative bg-white rounded-md outline-none focus:ring focus:ring-lightBlue-500 focus:ring-1 focus:border-lightBlue-500 border border-solid transition duration-200 "
                  />
                </div>
              </div>
              <div className="mb-0">
                <button
                  onClick={() => handleVoucher(promo)}
                  className="inline-block outline-none focus:outline-none align-middle transition-all duration-150 ease-in-out uppercase border border-solid font-bold last:mr-0 mr-2  text-white bg-pink-500 border-pink-500 active:bg-pink-600 active:border-pink-600 text-sm px-6 py-2 shadow hover:shadow-lg rounded-md"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>

          <div className="mt-3 border-t border-b py-2">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-400">Subtotal</p>
              <p className="text-lg font-semibold text-gray-900">
                {formattedCart}đ
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <p className="text-sm text-gray-400">Discount</p>
                {validPromo && (
                  <Chip
                    className="rounded-full bg-purple-400"
                    value={`${validPromo.title}_${validPromo.code}`}
                  />
                )}
              </div>
              <p className="text-lg font-semibold text-gray-900">
                
                {formattedDiscount}đ
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-400">Shipping</p>
              <p className="text-lg font-semibold text-gray-900">
                {shipFormat}đ
              </p>
            </div>
          </div>
          <div className="mt-3 flex items-center justify-between">
            <p className="text-sm font-medium text-gray-900">Total</p>
            <p className="text-2xl font-semibold text-gray-900">
              {total.toLocaleString('vi-VN')}
              <span className="text-[18px] font-bold ">đ</span>{" "}
            </p>
          </div>

          <Checkbox
            onChange={(e) => setCheck(e.target.checked)}
            checked={check}
            label={
              <Typography
                variant="small"
                color="blue-gray"
                className="flex font-medium"
              >
                Confirm address or click
                <Link to="/profile" className="text-cyan-500">
                  &nbsp;here to check
                </Link>
                .
              </Typography>
            }
          />

          <div className="mt-3 text-center">
            <button
              type="button"
              className={`group inline-flex w-full items-center justify-center rounded-md px-6 py-4 text-lg font-semibold text-white  focus:shadow transition-all duration-200 ease-in-out ${
                check
                  ? "bg-gray-900 hover:bg-gray-800"
                  : "cursor-not-allowed bg-gray-600 "
              }`}
              onClick={handlePay}
              disabled={!check}
            >
              Checkout
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`${
                  check ? "group-hover:ml-8" : ""
                } ml-4 h-6 w-6 transition-all`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CartItems;
