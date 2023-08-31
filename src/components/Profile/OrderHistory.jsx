import { BsFillBagHeartFill } from "react-icons/bs";
import { FaFileInvoiceDollar } from "react-icons/fa";
import {
  Card,
  CardHeader,
  Typography,
  CardBody,
  Chip,
  CardFooter,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import Invoice from "../Invoice/invoice";
import axios from "axios";

const TABLE_HEAD = [
  "Transaction ID",
  "Amount",
  "Date",
  "Status",
  "Invoice",
  "",
];

export default function OrderHistory() {
  const [openInvoiceId, setOpenInvoiceId] = useState(null);
  const [invoices, setInvoices] = useState([]);
  
  useEffect(() => {
    async function getInvoices() {
      try {
        const response = await axios.get("/v1/user/getInvoices");
        setInvoices(response.data);
      } catch (e) {
        console.log(e);
      }
    }
    getInvoices();
  }, []);

  const handleOpen = (invoiceId) => {
    if (openInvoiceId === invoiceId) {
      setOpenInvoiceId(null);
    } else {
      setOpenInvoiceId(invoiceId);
    }
  };

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
            {invoices?.map((invoice, index) => {
              const isLast = index === invoices.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={invoice._id}>
                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      <BsFillBagHeartFill className=" object-contain text-green-400" />

                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-bold"
                      >
                        {invoice._id}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {invoice.total}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {invoice.dueDate.substring(0, 10)}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <div className="w-max">
                      <Chip
                        size="sm"
                        variant="ghost"
                        value={invoice.status}
                        color={
                          invoice.status === "paid"
                            ? "green"
                            : invoice.status === "pending"
                            ? "amber"
                            : "red"
                        }
                      />
                    </div>
                  </td>

                  <td className={classes}>
                    <Tooltip content="show invoice">
                      <IconButton
                        variant="text"
                        onClick={() => handleOpen(invoice._id)}
                      >
                        <FaFileInvoiceDollar className="h-4 w-4" />
                      </IconButton>
                    </Tooltip>
                    <Invoice
                      open={openInvoiceId === invoice._id}
                      handler={() => handleOpen(invoice._id)}
                      invoiceId={invoice._id}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4"></CardFooter>
    </Card>
  );
}
