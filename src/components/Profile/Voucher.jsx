import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";

import { GiStrikingDiamonds } from "react-icons/gi";
import { HiFire } from "react-icons/hi";
import { toast } from "react-toastify";

const TABLE_HEAD = ["Title", "Change", "Date", ""];

function Voucher() {
  const [loyaltyProgram, setLoyaltyProgram] = useState(null);
  const [history, setHistory] = useState(null);
  const [vouchers, setVouchers] = useState(null);
  const [userVouchers, setUserVouchers] = useState(null);
  const [reward, setReward] = useState(null);
  const [classes, setClasses] = useState("");

  async function fetchPoints() {
    try {
      const response = await axios.get(`/v1/user/getLoyaltyPoints`);
      setLoyaltyProgram(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchPoints();
  }, []);

  useEffect(() => {
    async function fetchVouchers() {
      try {
        const response = await axios.get(`/v1/user/getRedeemVouchers`);
        setVouchers(response.data);
      } catch (e) {
        console.log(e);
      }
    }
    fetchVouchers();
  }, []);

  useEffect(() => {
    async function fetchReward() {
      try {
        const response = await axios.get(`/v1/user/getRewardToRedeem`);
        setReward(response.data);
      } catch (e) {
        console.log(e);
      }
    }
    fetchReward();
  }, []);

  useEffect(() => {
    async function fetchUserVouchers() {
      try {
        const response = await axios.get(`/v1/user/getUserVouchers`);
        setUserVouchers(response.data);
      } catch (e) {
        console.log(e);
      }
    }
    fetchUserVouchers();
  }, [loyaltyProgram]);

  useEffect(() => {
    async function fetchLoyaltyHistory() {
      try {
        const response = await axios.get(`/v1/user/getLoyaltyHistory`);
        setHistory(response.data);
      } catch (e) {
        console.log(e);
      }
    }
    fetchLoyaltyHistory();
  }, []);

  const handleRedeem = async (voucherId) => {
    const response = await axios.post("/v1/user/redeemVoucher", { voucherId });
    if (response.data == "Redeemed") {
      fetchPoints();
      toast.success(`đổi voucher thành công !`, { toastId: 1 });
    } else {
      toast.warn(`có lỗi xảy ra, vui lòng thử lại sau !`, { toastId: 0 });
    }
  };

  const handleRedeemReward = async () => {
    const response = await axios.post("/v1/user/redeemReward");
    if (response.data == "Redeem success, it's on the way to you !") {
      toast.success("Redeem success, it's on the way to you !", { toastId: 1 });
    } else {
      toast.warn(response.data, { toastId: 0 });
    }
  };

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
                      {loyaltyProgram && loyaltyProgram.loyaltyPoints}
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="mt-8 sm:mt-12">
                <dl className="flex justify-center items-center gap-4 ">
                  <div className="flex flex-col rounded-lg bg-secondary px-4 py-8 text-center min-w-[15rem]">
                    <dt className="order-last text-lg font-medium text-gray-500 mt-2">
                      Orders Points
                    </dt>

                    <dd className="text-4xl font-extrabold text-black md:text-5xl flex justify-center">
                      <HiFire className="text-xxl text-red-400" />
                      {loyaltyProgram && loyaltyProgram.ordersPoints}
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
              {vouchers &&
                vouchers.map((voucher) => (
                  <li key={voucher._id}>
                    <Card className="max-w-[24rem] overflow-hidden bg-secondary mb-4">
                      <CardHeader
                        floated={false}
                        shadow={false}
                        color="transparent"
                        className="m-0 rounded-none"
                      >
                        <img src={voucher.image} alt="off price" />
                      </CardHeader>
                      <CardBody className="flex justify-between">
                        <Typography variant="h5" color="red">
                          {voucher.title}
                        </Typography>
                        <IconButton
                          variant="outlined"
                          className="text-cyan-400"
                          onClick={() => handleRedeem(voucher._id)}
                        >
                          <p>{voucher.points}</p>
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
              {userVouchers ? (
                userVouchers.map((voucher) => (
                  <li key={voucher._id}>
                    <Card className="max-w-[24rem] overflow-hidden bg-secondary mb-4">
                      <CardHeader
                        floated={false}
                        shadow={false}
                        color="transparent"
                        className="m-0 rounded-none"
                      >
                        <img src={voucher.image} alt="off price" />
                      </CardHeader>
                      <CardBody className="flex justify-between">
                        <Typography variant="h5" color="red">
                          {voucher.name}
                        </Typography>
                        <p className="border-dashed border-2 border-red-300 text-red-300 px-5">
                          {voucher.code}
                        </p>
                      </CardBody>
                      <div className="w-9 h-9 bg-white rounded-full absolute bottom-1/2 transform -translate-y-1/2 left-0 -ml-6"></div>
                      <div className="w-9 h-9 bg-white rounded-full absolute bottom-1/2 transform -translate-y-1/2 right-0 -mr-6"></div>
                    </Card>
                  </li>
                ))
              ) : (
                <Typography variant="h6" color="red">
                  bạn chưa có voucher nào !
                </Typography>
              )}
            </ul>
          </div>

          <div className="flex flex-col rounded-lg  px-4 py-8 text-center">
            <h2 className="font-bold text-xl mb-4">Reward</h2>
            <ul>
              <li>
                <div className="min-h-screen ">
                  <div className="relative flex overflow-hidden rounded-lg">
                    <img
                      src={reward?.product.imageURLs[0]}
                      alt=""
                      className="absolute inset-0 w-full h-full object-center object-cover "
                    />
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                    <div className="relative w-full flex flex-col items-center justify-end bg-black bg-opacity-40 p-8 sm:py-28">
                      <Typography
                        variant="h4"
                        color="white"
                        className="mb-6 font-medium leading-[1.5]"
                      >
                        {reward?.product.name}
                      </Typography>
                      <Typography variant="h6" className="mb-4 text-gray-400">
                        Limited Edition
                      </Typography>
                      <Button
                        variant="outlined"
                        className="text-red-400 border-red-400 focus:ring-transparent"
                        onClick={() => handleRedeemReward()}
                      >
                        <div className="flex">
                          <HiFire className="text-xl " />
                          <p className="text-base font-bold">{reward?.point}</p>
                        </div>
                      </Button>
                      <Typography
                        variant="small"
                        className="mb-4 text-gray-400 mt-5"
                      >
                        Expired in {reward?.expired.slice(0, 10)}
                      </Typography>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </dl>
      </div>

      <Card className="h-full w-full mb-6">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <Typography variant="h5" color="blue-gray">
                Loyalty Point History
              </Typography>
            </div>
          </div>
        </CardHeader>
        <CardBody className="overflow-scroll px-0 max-h-[60vh]">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {history?.map((hist, index) => {
                const isLast = index === history.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={hist._id}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        {/* <BsFillBagHeartFill className=" object-contain text-green-400" /> */}

                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-bold"
                        >
                          {hist.title}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="w-14 text-center">
                        <Chip
                          size="sm"
                          variant="ghost"
                          value={hist.point < 0 ? hist.point : `+${hist.point}`}
                          color={hist.point < 0 ? "red" : "green"}
                        />
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {hist.date.substring(0, 10)}
                      </Typography>
                    </td>
                    {/* <td className={classes}>
                      <div className="w-max">
                        <Chip
                          size="sm"
                          variant="ghost"
                          value={hist.status}
                          color={
                            hist.status === "paid"
                              ? "green"
                              : hist.status === "pending"
                              ? "amber"
                              : "red"
                          }
                        />
                      </div>
                    </td> */}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </>
  );
}

export default Voucher;
