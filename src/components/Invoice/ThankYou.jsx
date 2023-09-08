import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function ThankYou() {
  const [queryParams] = useSearchParams();
  const orderId = queryParams.get("vnp_TxnRef");
  const [orderInfo, setOrderInfo] = useState(null);

  useEffect(() => {
    async function getInvoiceData() {
      try {
        console.log("id", orderId);

        const response = await axios.get(`/v1/user/getInvoice/${orderId}`);
        setOrderInfo(response.data);
      } catch (e) {
        console.log(e);
      }
    }
    getInvoiceData();
  }, []);

  return (
    <div className="">
      <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-xl">
          <h1 className="text-md font-semibold uppercase tracking-wide text-indigo-600">
            Thank you!
          </h1>
          <p className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">
            It is on the way!
          </p>
          <p className="mt-2 text-base text-gray-500">
            Your order #{orderInfo?._id} has shipped and will be with you soon.
          </p>

          <dl className="mt-12 text-sm font-medium">
            <dt className="text-gray-900">Tracking number</dt>
            <dd className="text-indigo-600 mt-2">{orderInfo?._id}</dd>
          </dl>
        </div>

        <div className="mt-10 border-t border-gray-200">
          <h2 className="sr-only">Your order</h2>

          <h3 className="sr-only">Items</h3>
          {orderInfo?.products.map((product) => (
            <div
              key={product.productId.id}
              className="py-10 border-b border-gray-200 flex space-x-6"
            >
              <img
                src={product.productId.imageURLs[0]}
                alt={product.productId.name}
                className="flex-none w-20 h-20 object-center object-cover bg-gray-100 rounded-lg sm:w-40 sm:h-40"
              />
              <div className="flex-auto flex flex-col">
                <div>
                  <h4 className="font-medium text-gray-900">
                    <a href={product.href}>{product.productId.name}</a>
                  </h4>
                  <p className="mt-2 text-sm text-gray-600 text-clip line-clamp-2">
                    {product.productId.describe}
                  </p>
                </div>
                <div className="mt-6 flex-1 flex items-end">
                  <dl className="flex text-sm divide-x divide-gray-200 space-x-4 sm:space-x-6">
                    <div className="flex">
                      <dt className="font-medium text-gray-900">Quantity</dt>
                      <dd className="ml-2 text-gray-700">{product.quantity}</dd>
                    </div>
                    <div className="pl-4 flex sm:pl-6">
                      <dt className="font-medium text-gray-900">Price</dt>
                      <dd className="ml-2 text-gray-700">
                        {product.productId.price} VND
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          ))}

          <div className="sm:ml-40 sm:pl-6">
            <h3 className="sr-only">Your information</h3>

            <h4 className="sr-only">Addresses</h4>
            <dl className="grid grid-cols-2 gap-x-6 text-sm py-10">
              <div>
                <dt className="font-medium text-gray-900">Shipping address</dt>
                <dd className="mt-2 text-gray-700">
                  <address className="not-italic">
                    <span className="block">{orderInfo?.cusId.address}</span>
                    {/* <span className="block">7363 Cynthia Pass</span>
                    <span className="block">Toronto, ON N3Y 4H8</span> */}
                  </address>
                </dd>
              </div>
              <div>
                <dt className="font-medium text-gray-900">Billing address</dt>
                <dd className="mt-2 text-gray-700">
                  <address className="not-italic">
                    <span className="block">{orderInfo?.cusId.address}</span>
                    {/* <span className="block">7363 Cynthia Pass</span>
                    <span className="block">Toronto, ON N3Y 4H8</span> */}
                  </address>
                </dd>
              </div>
            </dl>

            <h4 className="sr-only">Payment</h4>
            <dl className="grid grid-cols-2 gap-x-6 border-t border-gray-200 text-sm py-10">
              <div>
                <dt className="font-medium text-gray-900">Payment method</dt>
                <dd className="mt-2 text-gray-700">
                  <p>{orderInfo?.paymentInfo.vnp_CardType}</p>
                  <p>{orderInfo?.paymentInfo.vnp_BankCode}</p>
                  <p>
                    <span aria-hidden="true">•••• </span>
                  </p>
                </dd>
              </div>
              <div>
                <dt className="font-medium text-gray-900">Shipping method</dt>
                <dd className="mt-2 text-gray-700">
                  <p>DHL</p>
                  <p>Takes up to 3 working days</p>
                </dd>
              </div>
            </dl>

            <h3 className="sr-only">Summary</h3>

            <dl className="space-y-6 border-t border-gray-200 text-sm pt-10">
              {/* <div className="flex justify-between">
                <dt className="font-medium text-gray-900">Subtotal</dt>
                <dd className="text-gray-700">$36.00</dd>
              </div>
              <div className="flex justify-between">
                <dt className="flex font-medium text-gray-900">
                  Discount
                  <span className="rounded-full bg-gray-200 text-xs text-gray-600 py-0.5 px-2 ml-2">
                    STUDENT50
                  </span>
                </dt>
                <dd className="text-gray-700">-$18.00 (50%)</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-medium text-gray-900">Shipping</dt>
                <dd className="text-gray-700">$5.00</dd>
              </div> */}
              <div className="flex justify-between font-bold">
                <dt className="font-bold text-gray-900">Total</dt>
                <dd className="text-gray-900">
                  {orderInfo?.total.toLocaleString("vi-vn")}
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-medium text-gray-900">Earn Points</dt>
                <dd className="text-gray-900">
                  {orderInfo?.total.toString().slice(0, -3)}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
