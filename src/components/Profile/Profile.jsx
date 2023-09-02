import React, { useEffect, useState } from "react";
import {
  Tabs,
  TabsHeader,
  Tab,
  TabsBody,
  TabPanel,
} from "@material-tailwind/react";
import axios from "axios";
import AccountInformation from "./AccountInformation";
import OrderHistory from "./OrderHistory";
import Voucher from "./Voucher";

export const Profile = () => {
  const [activeTab, setActiveTab] = useState("Account");

  return (
    <div>
      <div className="bg-white">
        <div>
          <div
            className="relative z-40 lg:hidden"
            role="dialog"
            aria-modal="true"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25"></div>

            <div className="fixed inset-0 z-40 flex"></div>
          </div>

          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
            <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                Profile
              </h1>
            </div>

            {/* <section aria-labelledby="products-heading" className="pb-24 pt-6">
              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                <form className="hidden lg:block">
                  <Button
                    variant="text"
                    className="flex text-md items-center gap-2"
                  >
                    Account information{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </Button>
                </form>

                <AccountInformation/>
              </div>
            </section> */}
            <Tabs value="Account" orientation="vertical">
              <TabsHeader
                className="w-60 bg-white"
                indicatorProps={{
                  className: "bg-red-900/10 shadow-none !text-gray-900",
                }}
              >
                <Tab
                  key={"Account"}
                  value={"Account"}
                  onClick={() => setActiveTab("Account")}
                  className="place-items-start text-xl"
                >
                  <div className="flex items-center gap-2">
                    {/* icon */}
                    Account Information
                  </div>
                </Tab>
                <Tab
                  key={"Order"}
                  value={"Order"}
                  onClick={() => setActiveTab("Order")}
                  className="place-items-start text-xl"
                >
                  <div className="flex items-center gap-2">
                    {/* icon */}
                    Order History
                  </div>
                </Tab>
                <Tab
                  key={"Voucher"}
                  value={"Voucher"}
                  onClick={() => setActiveTab("Voucher")}
                  className="place-items-start text-xl"
                >
                  <div className="flex items-center gap-2">
                    {/* icon */}
                    Voucher
                  </div>
                </Tab>
              </TabsHeader>
              <TabsBody>
                <TabPanel
                  key={"Account"}
                  value={"Account"}
                  className="py-0 px-10 "
                >
                  <AccountInformation />
                </TabPanel>
                <TabPanel key={"Order"} value={"Order"} className="py-0 px-10">
                  <OrderHistory />
                </TabPanel>
                <TabPanel
                  key={"Voucher"}
                  value={"Voucher"}
                  className="py-0 px-10"
                >
                  {activeTab === "Voucher" && <Voucher />}
                </TabPanel>
              </TabsBody>
            </Tabs>
          </main>
        </div>
      </div>
    </div>
  );
};
