// import React from "react";

// function OrderHistory() {
//   return (
//     <div>
//       <div className="bg-white">
//         <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:pb-24 lg:px-8">
//           <div className="max-w-xl">
//             <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
//               Order history
//             </h1>
//             <p className="mt-2 text-sm text-gray-500">
//               Check the status of recent orders, manage returns, and download
//               invoices.
//             </p>
//           </div>

//           <div className="mt-16">
//             <h2 className="sr-only">Recent orders</h2>

//             <div className="space-y-20">
//               <div>
//                 <h3 className="sr-only">
//                   Order placed on{" "}
//                   <time datetime="2021-01-22">January 22, 2021</time>
//                 </h3>

//                 <div className="bg-gray-50 rounded-lg py-6 px-4 sm:px-6 sm:flex sm:items-center sm:justify-between sm:space-x-6 lg:space-x-8">
//                   <dl className="divide-y divide-gray-200 space-y-6 text-sm text-gray-600 flex-auto sm:divide-y-0 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-x-6 lg:w-1/2 lg:flex-none lg:gap-x-8">
//                     <div className="flex justify-between sm:block">
//                       <dt className="font-medium text-gray-900">Date placed</dt>
//                       <dd className="sm:mt-1">
//                         <time datetime="2021-01-22">January 22, 2021</time>
//                       </dd>
//                     </div>
//                     <div className="flex justify-between pt-6 sm:block sm:pt-0">
//                       <dt className="font-medium text-gray-900">
//                         Order number
//                       </dt>
//                       <dd className="sm:mt-1">WU88191111</dd>
//                     </div>
//                     <div className="flex justify-between pt-6 font-medium text-gray-900 sm:block sm:pt-0">
//                       <dt>Total amount</dt>
//                       <dd className="sm:mt-1">$238.00</dd>
//                     </div>
//                   </dl>
//                   <a
//                     href="#"
//                     className="w-full flex items-center justify-center bg-white mt-6 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto sm:mt-0"
//                   >
//                     View Invoice
//                     <span className="sr-only">for order WU88191111</span>
//                   </a>
//                 </div>

//                 <table className="mt-4 w-full text-gray-500 sm:mt-6">
//                   <caption className="sr-only">Products</caption>
//                   <thead className="sr-only text-sm text-gray-500 text-left sm:not-sr-only">
//                     <tr>
//                       <th
//                         scope="col"
//                         className="sm:w-2/5 lg:w-1/3 pr-8 py-3 font-normal"
//                       >
//                         Product
//                       </th>
//                       <th
//                         scope="col"
//                         className="hidden w-1/5 pr-8 py-3 font-normal sm:table-cell"
//                       >
//                         Price
//                       </th>
//                       <th
//                         scope="col"
//                         className="hidden pr-8 py-3 font-normal sm:table-cell"
//                       >
//                         Status
//                       </th>
//                       <th
//                         scope="col"
//                         className="w-0 py-3 font-normal text-right"
//                       >
//                         Info
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody className="border-b border-gray-200 divide-y divide-gray-200 text-sm sm:border-t">
//                     <tr>
//                       <td className="py-6 pr-8">
//                         <div className="flex items-center">
//                           <img
//                             src="https://tailwindui.com/img/ecommerce-images/order-history-page-02-product-01.jpg"
//                             alt="Detail of mechanical pencil tip with machined black steel shaft and chrome lead tip."
//                             className="w-16 h-16 object-center object-cover rounded mr-6"
//                           />
//                           <div>
//                             <div className="font-medium text-gray-900">
//                               Machined Pen and Pencil Set
//                             </div>
//                             <div className="mt-1 sm:hidden">$70.00</div>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="hidden py-6 pr-8 sm:table-cell">$70.00</td>
//                       <td className="hidden py-6 pr-8 sm:table-cell">
//                         Delivered Jan 25, 2021
//                       </td>
//                       <td className="py-6 font-medium text-right whitespace-nowrap">
//                         <a href="#" className="text-indigo-600">
//                           View<span className="hidden lg:inline"> Product</span>
//                           <span className="sr-only">
//                             , Machined Pen and Pencil Set
//                           </span>
//                         </a>
//                       </td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>

//               <div>
//                 <h3 className="sr-only">
//                   Order placed on{" "}
//                   <time datetime="2021-01-22">January 22, 2021</time>
//                 </h3>

//                 <div className="bg-gray-50 rounded-lg py-6 px-4 sm:px-6 sm:flex sm:items-center sm:justify-between sm:space-x-6 lg:space-x-8">
//                   <dl className="divide-y divide-gray-200 space-y-6 text-sm text-gray-600 flex-auto sm:divide-y-0 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-x-6 lg:w-1/2 lg:flex-none lg:gap-x-8">
//                     <div className="flex justify-between sm:block">
//                       <dt className="font-medium text-gray-900">Date placed</dt>
//                       <dd className="sm:mt-1">
//                         <time datetime="2021-01-22">January 22, 2021</time>
//                       </dd>
//                     </div>
//                     <div className="flex justify-between pt-6 sm:block sm:pt-0">
//                       <dt className="font-medium text-gray-900">
//                         Order number
//                       </dt>
//                       <dd className="sm:mt-1">WU88191111</dd>
//                     </div>
//                     <div className="flex justify-between pt-6 font-medium text-gray-900 sm:block sm:pt-0">
//                       <dt>Total amount</dt>
//                       <dd className="sm:mt-1">$238.00</dd>
//                     </div>
//                   </dl>
//                   <a
//                     href="#"
//                     className="w-full flex items-center justify-center bg-white mt-6 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto sm:mt-0"
//                   >
//                     View Invoice
//                     <span className="sr-only">for order WU88191111</span>
//                   </a>
//                 </div>

//                 <table className="mt-4 w-full text-gray-500 sm:mt-6">
//                   <caption className="sr-only">Products</caption>
//                   <thead className="sr-only text-sm text-gray-500 text-left sm:not-sr-only">
//                     <tr>
//                       <th
//                         scope="col"
//                         className="sm:w-2/5 lg:w-1/3 pr-8 py-3 font-normal"
//                       >
//                         Product
//                       </th>
//                       <th
//                         scope="col"
//                         className="hidden w-1/5 pr-8 py-3 font-normal sm:table-cell"
//                       >
//                         Price
//                       </th>
//                       <th
//                         scope="col"
//                         className="hidden pr-8 py-3 font-normal sm:table-cell"
//                       >
//                         Status
//                       </th>
//                       <th
//                         scope="col"
//                         className="w-0 py-3 font-normal text-right"
//                       >
//                         Info
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody className="border-b border-gray-200 divide-y divide-gray-200 text-sm sm:border-t">
//                     <tr>
//                       <td className="py-6 pr-8">
//                         <div className="flex items-center">
//                           <img
//                             src="https://tailwindui.com/img/ecommerce-images/order-history-page-02-product-01.jpg"
//                             alt="Detail of mechanical pencil tip with machined black steel shaft and chrome lead tip."
//                             className="w-16 h-16 object-center object-cover rounded mr-6"
//                           />
//                           <div>
//                             <div className="font-medium text-gray-900">
//                               Machined Pen and Pencil Set
//                             </div>
//                             <div className="mt-1 sm:hidden">$70.00</div>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="hidden py-6 pr-8 sm:table-cell">$70.00</td>
//                       <td className="hidden py-6 pr-8 sm:table-cell">
//                         Delivered Jan 25, 2021
//                       </td>
//                       <td className="py-6 font-medium text-right whitespace-nowrap">
//                         <a href="#" className="text-indigo-600">
//                           View<span className="hidden lg:inline"> Product</span>
//                           <span className="sr-only">
//                             , Machined Pen and Pencil Set
//                           </span>
//                         </a>
//                       </td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default OrderHistory;

import { BsFillPencilFill, BsFillBagHeartFill } from "react-icons/bs";
import { FaFileInvoiceDollar } from "react-icons/fa";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Avatar,
  IconButton,
  Tooltip,
  Input,
} from "@material-tailwind/react";
import { useState } from "react";
import Invoice from "../Invoice/invoice";

const TABLE_HEAD = ["Transaction", "Amount", "Date", "Status", "Invoice", ""];

const TABLE_ROWS = [
  {
    img: "https://demos.creative-tim.com/notus-pro-react/static/media/ct-logo-text-black.3f86d99c.png",
    name: "Spotify",
    amount: "$2,500",
    date: "Wed 3:00pm",
    status: "paid",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "https://demos.creative-tim.com/notus-pro-react/static/media/ct-logo-text-black.3f86d99c.png",
    name: "Amazon",
    amount: "$5,000",
    date: "Wed 1:00pm",
    status: "paid",
    account: "master-card",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "https://demos.creative-tim.com/notus-pro-react/static/media/ct-logo-text-black.3f86d99c.png",
    name: "Pinterest",
    amount: "$3,400",
    date: "Mon 7:40pm",
    status: "pending",
    account: "master-card",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "https://demos.creative-tim.com/notus-pro-react/static/media/ct-logo-text-black.3f86d99c.png",
    name: "Google",
    amount: "$1,000",
    date: "Wed 5:00pm",
    status: "paid",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "https://demos.creative-tim.com/notus-pro-react/static/media/ct-logo-text-black.3f86d99c.png",
    name: "netflix",
    amount: "$14,000",
    date: "Wed 3:30am",
    status: "cancelled",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
];

export default function OrderHistory() {
  const [open, setOpen] = useState(false);
 
  const handleOpen = () => setOpen(!open);

  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Typography variant="h5" color="blue-gray">
              Recent Transactions
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              These are details about the last transactions
            </Typography>
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-0">
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
            {TABLE_ROWS.map(
              (
                {
                  name,
                  amount,
                  date,
                  status,
                },
                index
              ) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={name}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <BsFillBagHeartFill className=" object-contain text-green-400" />

                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-bold"
                        >
                          {name}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {amount}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {date}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                        <Chip
                          size="sm"
                          variant="ghost"
                          value={status}
                          color={
                            status === "paid"
                              ? "green"
                              : status === "pending"
                              ? "amber"
                              : "red"
                          }
                        />
                      </div>
                    </td>

                    <td className={classes}>
                      <Tooltip content="show invoice">
                        <IconButton variant="text" onClick={handleOpen}>
                          <FaFileInvoiceDollar className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                      <Invoice open={open} handler={handleOpen}/>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4"></CardFooter>
    </Card>
  );
}
