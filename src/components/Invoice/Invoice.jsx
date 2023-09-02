import { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  ThemeProvider,
  Textarea,
  Collapse,
  Rating,
} from "@material-tailwind/react";
import axios from "axios";
import { toast } from "react-toastify";

const themeDialog = {
  dialog: {
    defaultProps: {
      dismiss: {
        outsidePressEvent: false,
      },
    },
    styles: {
      base: {
        backdrop: {
          backgroundOpacity: "bg-opacity-10",
          backdropFilter: "backdrop-blur-[2px]",
        },
        container: {
          borderRadius: "rounded-lg",
          boxShadow: "shadow-none",
        },
      },
    },
  },
};

export default function Invoice({ open, handler, invoiceId }) {
  const handleOpen = handler;

  const [invoice, setInvoice] = useState();
  const [openReviewList, setOpenReviewList] = useState([]);
  const [rated, setRated] = useState(5);
  const [content, setContent] = useState("");

  async function getInvoice() {
    try {
      const response = await axios.get(`/v1/user/getInvoice/${invoiceId}`);
      console.log(response.data);
      setInvoice(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getInvoice();
  }, [invoiceId]);

  const handleReview = async (content, rating, orderID, productID) => {
    await axios.post("/v1/user/postReview", {
      content,
      rating,
      orderID,
      productID,
    });
    const loyaltyFetch = await axios.get("/v1/user/getLoyaltyInfo");
    toast.success(
      `cám ơn bạn đã review sản phẩm, bạn được cộng ${loyaltyFetch.data.pointReview} điểm`,
      { autoClose: 10000 }
    );
    setOpenReviewList((cur) => cur.filter((curId) => curId != productID));
    getInvoice();
  };

  const toggleOpenReview = (id) => {
    if (openReviewList.includes(id)) {
      setOpenReviewList((cur) => cur.filter((curId) => curId != id));
    } else {
      setOpenReviewList([id]);
    }
    setContent("");
    setRated(5);
  };
  return (
    <>
      <ThemeProvider value={themeDialog}>
        <Dialog open={open} handler={handleOpen} size="xl">
          <DialogHeader>
            <div className="flex justify-start item-start space-y-2 flex-col ">
              <h1 className="text-3xl lg:text-2xl font-semibold leading-7 lg:leading-9  text-gray-800">
                Order #{invoice && invoice._id}
              </h1>
            </div>
          </DialogHeader>
          <DialogBody divider className="h-[40rem] overflow-scroll">
            <main className="relative lg:min-h-full">
              <div className="h-80 overflow-hidden lg:absolute lg:w-1/2 lg:h-full lg:pr-4 xl:pr-12">
                <img
                  src="https://images.unsplash.com/photo-1624274579623-18121fc8126e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
                  alt="TODO"
                  className="h-full w-full object-center object-cover"
                />
              </div>

              <div>
                <div className="max-w-2xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:py-8 lg:grid lg:grid-cols-2 lg:gap-x-8 xl:gap-x-24">
                  <div className="lg:col-start-2">
                    {invoice && invoice.status == "paid" ? (
                      <>
                        <h1 className="text-sm font-medium text-indigo-600">
                          Payment successful
                        </h1>
                        <p className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                          Thanks for ordering
                        </p>
                        <p className="mt-2 text-base text-gray-500">
                          We appreciate your order, we’re currently processing
                          it. So hang tight and we’ll send you confirmation very
                          soon!
                        </p>
                      </>
                    ) : (
                      <>
                        <h1 className="text-sm font-medium text-indigo-600">
                          Payment Fail
                        </h1>
                        <p className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                          Waiting for your new order
                        </p>
                      </>
                    )}
                    <dl className="mt-16 text-sm font-medium">
                      <dt className="text-gray-900">Tracking number</dt>
                      <dd className="mt-2 text-indigo-600">
                        {invoice && invoice._id}
                      </dd>
                    </dl>

                    <ul
                      role="list"
                      className="mt-6 text-sm font-medium text-gray-500 border-t border-gray-200 divide-y divide-gray-200"
                    >
                      {invoice &&
                        invoice.products.map((product) => (
                          <li
                            key={product.productId._id}
                            className="flex py-6 space-x-6"
                          >
                            <img
                              src={product.productId.imageURLs[0]}
                              alt={product.productId._id}
                              className="flex-none w-24 h-24 bg-gray-100 rounded-md object-center object-cover"
                            />
                            <div className="flex-auto space-y-1">
                              <h3 className="text-gray-900">
                                {product.productId.name}
                              </h3>
                              <p>x{product.quantity}</p>
                              {invoice.status == "paid" &&
                                (!product.isReview ? (
                                  <Button
                                    className="text-red-400"
                                    variant="text"
                                    onClick={() =>
                                      toggleOpenReview(product.productId._id)
                                    }
                                  >
                                    Review
                                  </Button>
                                ) : (
                                  <h4 className="italic text-green-400">
                                    reviewed
                                  </h4>
                                ))}
                              <Collapse
                                open={openReviewList.includes(
                                  product.productId._id
                                )}
                              >
                                <Textarea
                                  variant="static"
                                  placeholder="Your Review ..."
                                  rows={3}
                                  value={content}
                                  onChange={(e) => setContent(e.target.value)}
                                />
                                <div className="flex w-full justify-between py-1.5">
                                  <Rating
                                    value={5}
                                    onChange={(value) => setRated(value)}
                                  />
                                  <div className="flex gap-2">
                                    <Button
                                      size="sm"
                                      className="rounded-md"
                                      variant="outlined"
                                      onClick={() =>
                                        handleReview(
                                          content,
                                          rated,
                                          invoice._id,
                                          product.productId._id
                                        )
                                      }
                                    >
                                      Post
                                    </Button>
                                  </div>
                                </div>
                              </Collapse>
                            </div>
                            <p className="flex-none font-medium text-gray-900">
                              {product.productId.price}
                            </p>
                          </li>
                        ))}
                    </ul>

                    <dl className="text-sm font-medium text-gray-500 space-y-6 border-t border-gray-200 pt-6">
                      <div className="flex justify-between">
                        <dt>Subtotal</dt>
                        <dd className="text-gray-900">$72.00</dd>
                      </div>

                      <div className="flex justify-between">
                        <dt>Shipping</dt>
                        <dd className="text-gray-900">$8.00</dd>
                      </div>

                      <div className="flex justify-between">
                        <dt>Taxes</dt>
                        <dd className="text-gray-900">$6.40</dd>
                      </div>

                      <div className="flex items-center justify-between border-t border-gray-200 text-gray-900 pt-6">
                        <dt className="text-base">Total</dt>
                        <dd className="text-base">
                          ${invoice && invoice.total}
                        </dd>
                      </div>
                    </dl>

                    <dl className="mt-16 grid grid-cols-2 gap-x-4 text-sm text-gray-600">
                      <div>
                        <dt className="font-medium text-gray-900">
                          Shipping Address
                        </dt>
                        <dd className="mt-2">
                          <address className="not-italic">
                            <span className="block">Kristin Watson</span>
                            <span className="block">7363 Cynthia Pass</span>
                            <span className="block">Toronto, ON N3Y 4H8</span>
                          </address>
                        </dd>
                      </div>
                      <div>
                        <dt className="font-medium text-gray-900">
                          Payment Information
                        </dt>
                        <dd className="mt-2">
                          <p className="not-italic">
                            {invoice && invoice.status == "paid" ? (
                              <>
                                <span className="block">
                                  {invoice && invoice.paymentInfo.vnp_CardType}
                                </span>
                                <span className="block">
                                  {invoice && invoice.paymentInfo.vnp_BankCode}
                                </span>
                              </>
                            ) : (
                              <span className="block">
                                Cancelled payment
                              </span>
                            )}
                          </p>
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </main>
          </DialogBody>
          <DialogFooter className="space-x-2">
            <Button variant="outlined" color="red" onClick={handleOpen}>
              close
            </Button>
            <Button variant="gradient" color="green" onClick={handleOpen}>
              Save changes
            </Button>
          </DialogFooter>
        </Dialog>
      </ThemeProvider>
    </>
  );
}
