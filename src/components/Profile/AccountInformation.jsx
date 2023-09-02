import { Input, Button, Typography } from "@material-tailwind/react";
import axios from "axios";

import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "~/contexts/AuthContext";

function AccountInformation() {
  const [user, setUser] = useState({
    _id: "",
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
    email: "",
    username: "",
  });
  const { userInfo } = useContext(AuthContext);

  useEffect(() => {
    if (userInfo != null) {
      setUser(userInfo);
    }
  }, [userInfo]);

  const handleSaveUser = async () => {
    try {
      await axios.post("/v1/user/profile", user);
      toast.success("Updated your information! 😍😍");
    } catch (e) {
      console.log(e);
      toast.error("Something went wrong! 😔😔😔");
    }
  };

  return (
    <div className="lg:col-span-3">
      <div className="border-b border-gray-900/10 pb-12 px-4 py-4">
        <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Typography variant="h5" color="blue-gray">
              Personal Information
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Use a permanent address where you can receive mail.
            </Typography>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <Input
              variant="static"
              label="First name"
              value={user.firstName}
              onChange={(e) =>
                setUser((prev) => ({ ...prev, firstName: e.target.value }))
              }
            />
          </div>

          <div className="sm:col-span-3">
            <Input
              variant="static"
              label="Last name"
              value={user.lastName}
              onChange={(e) =>
                setUser((prev) => ({ ...prev, lastName: e.target.value }))
              }
            />
          </div>

          <div className="col-span-4 md:col-span-6">
            <Input
            className="w-full "
              variant="static"
              label="Email address"
              value={user.email}
              onChange={(e) =>
                setUser((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          </div>

          <div className="col-span-4 md:col-span-6">
            <Input
              variant="static"
              label="Phone"
              value={user.phone}
              onChange={(e) =>
                setUser((prev) => ({ ...prev, phone: e.target.value }))
              }
            />
          </div>

          <h2 className="text-base font-semibold leading-7 text-gray-900 col-span-full">
            Shipping Information
          </h2>

          <div className="col-span-full">
            <Input
              variant="static"
              label="Street address"
              value={user.address}
              onChange={(e) =>
                setUser((prev) => ({ ...prev, address: e.target.value }))
              }
            />
          </div>

          <div className="sm:col-span-2 sm:col-start-1">
            <Input variant="static" label="City" />
          </div>

          <div className="sm:col-span-2">
            <Input variant="static" label="State / Province" />
          </div>

          <div className="sm:col-span-2">
            <Input variant="static" label="ZIP / Postal code" />
          </div>

          <Button className="" color="red" onClick={handleSaveUser}>
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AccountInformation;
