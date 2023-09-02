import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  IconButton,
  Typography,
} from "@material-tailwind/react";

import { GiStrikingDiamonds } from "react-icons/gi";
import { HiFire } from "react-icons/hi";

const vouchers = [
  {
    id: 1,
    value: 0.1,
    name: "10%",
    redeem: 100,
    image:
      "https://cdn.pixabay.com/photo/2020/03/02/18/23/coffee-4896485_1280.jpg",
  },
  {
    id: 2,
    value: 0.15,
    redeem: 150,
    image:
      "https://cdn.pixabay.com/photo/2020/03/02/18/19/clairvoyance-4896472_1280.jpg",
    name: "15%",
  },
  {
    id: 3,
    value: 0.2,
    redeem: 200,
    image:
      "https://cdn.pixabay.com/photo/2020/02/04/19/06/tarot-4819137_1280.jpg",
    name: "20%",
  },
];

const vouchers_user = [
  {
    id: 1,
    value: 0.1,
    name: "10%",
    code: "ABC",
    image:
      "https://cdn.pixabay.com/photo/2020/03/02/18/23/coffee-4896485_1280.jpg",
  },
  {
    id: 2,
    value: 0.15,
    code: "ABC",
    image:
      "https://cdn.pixabay.com/photo/2020/03/02/18/19/clairvoyance-4896472_1280.jpg",
    name: "15%",
  },
  {
    id: 3,
    value: 0.2,
    code: "ABV",
    image:
      "https://cdn.pixabay.com/photo/2020/02/04/19/06/tarot-4819137_1280.jpg",
    name: "20%",
  },
];

function Voucher() {
  return (
    <>
      <div className="bg-white flex flex-wrap items-center justify-center p-4 ">
        <section className="bg-white">
          <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-1 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Loyalty Program
              </h2>

              <p className="mt-4 text-gray-500 sm:text-xl">
                tích thật nhiều điểm để đổi những phần quà giá trị và voucher
                giảm giá
              </p>
            </div>

            <div className="flex justify-evenly">
              <div className="mt-8 sm:mt-12">
                <dl className="flex justify-center items-center gap-4 ">
                  <div className="flex flex-col rounded-lg bg-secondary px-4 py-8 text-center min-w-[15rem]">
                    <dt className="order-last text-lg font-medium text-gray-500 mt-2">
                      Loyalty Points
                    </dt>

                    <dd className="text-4xl font-extrabold text-black md:text-5xl flex justify-center">
                      <GiStrikingDiamonds className="text-xxl text-cyan-400" />
                      100
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="mt-8 sm:mt-12">
                <dl className="flex justify-center items-center gap-4 ">
                  <div className="flex flex-col rounded-lg bg-secondary px-4 py-8 text-center min-w-[15rem]">
                    <dt className="order-last text-lg font-medium text-gray-500 mt-2">
                      Total Orders
                    </dt>

                    <dd className="text-4xl font-extrabold text-black md:text-5xl flex justify-center">
                      <HiFire className="text-xxl text-red-400" />
                      10
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="mt-1">
        <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="flex flex-col   px-4 py-8 text-center">
            <h2 className="font-bold text-xl mb-4">Redeem</h2>
            <ul>
              {vouchers.map((voucher) => (
                <li key={voucher.id}>
                  <Card className="max-w-[24rem]  bg-secondary mb-4">
                    <CardHeader
                      floated={false}
                      shadow={false}
                      color="transparent"
                      className="m-0 rounded-none rounded-lg"
                    >
                      <img src={voucher.image} alt="off price" />
                    </CardHeader>
                    <CardBody className="flex justify-between">
                      <Typography variant="h5" color="red">
                        {voucher.name} OFF
                      </Typography>
                      <IconButton variant="outlined" className="text-cyan-400">
                        <p>{voucher.redeem}</p>
                        <GiStrikingDiamonds className="text-lg " />
                      </IconButton>
                    </CardBody>
                    <div className="w-9 h-9 bg-white rounded-full absolute bottom-1/2 transform -translate-y-1/2 left-0 -ml-6"></div>
                    <div className="w-9 h-9 bg-white rounded-full absolute bottom-1/2 transform -translate-y-1/2 right-0 -mr-6"></div>
                  </Card>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col rounded-lg  px-4 py-8 text-center">
            <h2 className="font-bold text-xl mb-4">Your coupon</h2>
            <ul>
              {vouchers_user.map((voucher) => (
                <li key={voucher.id}>
                  <Card className="max-w-[24rem] bg-secondary mb-4">
                    <CardHeader
                      floated={false}
                      shadow={false}
                      color="transparent"
                      className="m-0 rounded-none  rounded-lg"
                    >
                      <img src={voucher.image} alt="off price" />
                    </CardHeader>
                    <CardBody className="flex justify-between">
                      <Typography variant="h5" color="red">
                        {voucher.name} OFF
                      </Typography>
                      <p className="border-dashed border-2 border-red-300 text-red-300 px-5">
                        {voucher.code}
                      </p>
                    </CardBody>
                    <div className="w-9 h-9 bg-white rounded-full absolute bottom-1/2 transform -translate-y-1/2 left-0 -ml-6"></div>
                    <div className="w-9 h-9 bg-white rounded-full absolute bottom-1/2 transform -translate-y-1/2 right-0 -mr-6"></div>
                  </Card>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col rounded-lg  px-4 py-8 text-center">
            <h2 className="font-bold text-xl mb-4">Reward</h2>
            <ul>
              <li>
                <Card
                  shadow={false}
                  className="relative grid h-[40rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
                >
                  <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://images.unsplash.com/photo-1615829332206-22479388eecc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80')] bg-cover bg-center"
                  >
                    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                  </CardHeader>
                  <CardBody className="relative py-14 px-6 md:px-12">
                    <Typography
                      variant="h2"
                      color="white"
                      className="mb-6 font-medium leading-[1.5]"
                    >
                      Angel Fallen
                    </Typography>
                    <Typography variant="h6" className="mb-4 text-gray-400">
                      Limited Edition
                    </Typography>
                    <Button
                      variant="outlined"
                      className="text-red-400 border-red-400 focus:ring-transparent"
                    >
                      <div className="flex">
                        <HiFire className="text-xl " />
                        <p className="text-base font-bold">{5}</p>
                      </div>
                    </Button>
                    <Typography variant="small" className="mb-4 text-gray-400 mt-5">
                      Expired in 2023-08-02
                    </Typography>
                  </CardBody>
                </Card>
              </li>
            </ul>
          </div>
        </dl>
      </div>

      {/* <div className="w-full md:w-1/2 lg:w-1/3 p-2">
        <div className="bg-white rounded-lg overflow-hidden shadow-lg max-w-sm m-auto mb-4">
          <div className="h-2 bg-red-600"></div>

          <div className="p-6">
            <div className="text-5xl font-bold text-red-600 mb-4">50% OFF</div>

            <p className="text-gray-700 mb-4">
              Get half off your next purchase of $50 or more with this exclusive
              coupon!
            </p>

            <div className="bg-gray-100 rounded-lg px-4 py-2 flex justify-between items-center">
              <span className="font-semibold">Coupon Code:</span>
              <span className="font-bold text-red-600">SAVE50</span>
            </div>

            <div className="mt-4 text-sm text-gray-600">
              <span>Expires on 31/12/2023</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 p-2">
        <div className="bg-white rounded-lg overflow-hidden shadow-lg max-w-sm m-auto mb-4">
          <div className="h-2 bg-red-600"></div>

          <div className="p-6">
            <div className="text-5xl font-bold text-red-600 mb-4">50% OFF</div>

            <p className="text-gray-700 mb-4">
              Get half off your next purchase of $50 or more with this exclusive
              coupon!
            </p>

            <div className="bg-gray-100 rounded-lg px-4 py-2 flex justify-between items-center">
              <span className="font-semibold">Coupon Code:</span>
              <span className="font-bold text-red-600">SAVE50</span>
            </div>

            <div className="mt-4 text-sm text-gray-600">
              <span>Expires on 31/12/2023</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 p-2">
        <div className="bg-white rounded-lg overflow-hidden shadow-lg max-w-sm m-auto mb-4">
          <div className="h-2 bg-red-600"></div>

          <div className="p-6">
            <div className="text-5xl font-bold text-red-600 mb-4">50% OFF</div>

            <p className="text-gray-700 mb-4">
              Get half off your next purchase of $50 or more with this exclusive
              coupon!
            </p>

            <div className="bg-gray-100 rounded-lg px-4 py-2 flex justify-between items-center">
              <span className="font-semibold">Coupon Code:</span>
              <span className="font-bold text-red-600">SAVE50</span>
            </div>

            <div className="mt-4 text-sm text-gray-600">
              <span>Expires on 31/12/2023</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 p-2">
        <div className="bg-white rounded-lg overflow-hidden shadow-lg max-w-sm m-auto mb-4">
          <div className="h-2 bg-red-600"></div>

          <div className="p-6">
            <div className="text-5xl font-bold text-red-600 mb-4">50% OFF</div>

            <p className="text-gray-700 mb-4">
              Get half off your next purchase of $50 or more with this exclusive
              coupon!
            </p>

            <div className="bg-gray-100 rounded-lg px-4 py-2 flex justify-between items-center">
              <span className="font-semibold">Coupon Code:</span>
              <span className="font-bold text-red-600">SAVE50</span>
            </div>

            <div className="mt-4 text-sm text-gray-600">
              <span>Expires on 31/12/2023</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 p-2">
        <div className="bg-white rounded-lg overflow-hidden shadow-lg max-w-sm m-auto mb-4">
          <div className="h-2 bg-red-600"></div>

          <div className="p-6">
            <div className="text-5xl font-bold text-red-600 mb-4">50% OFF</div>

            <p className="text-gray-700 mb-4">
              Get half off your next purchase of $50 or more with this exclusive
              coupon!
            </p>

            <div className="bg-gray-100 rounded-lg px-4 py-2 flex justify-between items-center">
              <span className="font-semibold">Coupon Code:</span>
              <span className="font-bold text-red-600">SAVE50</span>
            </div>

            <div className="mt-4 text-sm text-gray-600">
              <span>Expires on 31/12/2023</span>
            </div>
          </div>
        </div>
      </div> */}
      {/* </div> */}
    </>
  );
}

export default Voucher;
