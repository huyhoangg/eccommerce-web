import { Spinner } from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import ThankYou from "~/components/Invoice/ThankYou";
import NavBar from "~/components/NavBar/NavBar";

function ReturnPaymentPage() {
  const [processing, setProccessing] = useState(false);

  // const [queryParams] = useSearchParams();
  // const status = queryParams.get("vnp_ResponseCode");
  // const vnp_Amount = queryParams.get("vnp_Amount");
  // const vnp_BankCode = queryParams.get("vnp_BankCode");
  // const vnp_BankTranNo = queryParams.get("vnp_BankTranNo");
  // const vnp_CardType = queryParams.get("vnp_CardType");
  // const vnp_OrderInfo = queryParams.get("vnp_OrderInfo");

  const navigate = useNavigate();

  useEffect(() => {
    const queryLink = window.location.href.split("?");
    const IPN_query = `/v1/user/checkInvoice?${queryLink[1]}`;
    async function checkIPN() {
      try {
        const response = await axios.get(IPN_query);
        // console.log(response);
        if (response.data.RspCode == "00") {
          setProccessing(true);
          return;
        } else if (response.data.RspCode == "97") {
          toast.error("Unable to process your payment !", {
            toastId: response.data.RspCode,
          });
        } else if (response.data.RspCode == "04") {
          toast.error("amount invalid !", { toastId: response.data.RspCode });
        } else if (response.data.RspCode == "01") {
          toast.error("order not found !", { toastId: response.data.RspCode });
        } else if (response.data.RspCode == "24") {
          toast.error("payment cancelled !", {
            toastId: response.data.RspCode,
          });
        }
        navigate("/store");
      } catch (e) {
        console.log(e);
      }
    }
    checkIPN();
  }, []);

  return (
    <div>
      <NavBar />
      {processing ? (
        <ThankYou />
      ) : (
        <div className="flex justify-center items-center flex-col h-screen">
          <h1>processing payment ... </h1>
          <Spinner className="h-12 w-12 m-5" />
        </div>
      )}
    </div>
  );
}

export default ReturnPaymentPage;
