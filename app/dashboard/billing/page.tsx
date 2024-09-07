"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import axios from "axios";
import Razorpay from "razorpay";
import { Loader2Icon } from "lucide-react";
import { db } from "@/utils/db";
import { userSubcription } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment";

const page = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useUser();
  const createSubscriptions = () => {
    setLoading(true);
    axios.post("/api/create-subscription/", {}).then(
      (res) => {
        // console.log(res.data);
        onPayment(res?.data?.id);
      },
      (err) => {
        console.log("err", err);
        setLoading(false);
      }
    );
  };

  const onPayment = (subId: string) => {
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      subscription_id: subId,
      name: "Tarun Patidar AI Apps",
      description: "Heyy this is Monthly subscription here...",
      handler: async (res: any) => {
        // console.log("res", res);
        if (res) {
          SaveSubscription(res?.razorpay_payment_id);
        }
        setLoading(false);
      },
    };
    // @ts-ignore
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const SaveSubscription = async (paymentId: string) => {
    const result = await db.insert(userSubcription).values({
      email: user?.primaryEmailAddress?.emailAddress,
      userName: user?.fullName,
      active: true,
      paymentId: paymentId,
      joinDate: moment().format("DD/MM/YYYY"),
    });
    // console.log(result);
    if (result) {
      window.location.reload();
    }
  };
  return (
    <div>
      <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
        <h1 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Upgrade With Monthly Plan
        </h1>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Free Plan */}
          <div className="bg-white shadow-lg rounded-lg p-6 w-full">
            <h2 className="text-xl md:text-2xl font-bold text-center mb-4">
              Free
            </h2>
            <p className="text-center text-3xl md:text-4xl font-bold mb-2">
              $0<span className="text-lg">/month</span>
            </p>
            <ul className="text-sm md:text-base mb-6">
              <li className="mb-2">✔️ 10,000 Words/Month</li>
              <li className="mb-2">✔️ 50+ Content Templates</li>
              <li className="mb-2">✔️ Unlimited Download & Copy</li>
              <li>✔️ 1 Month of History</li>
            </ul>
            <button className="bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded w-full">
              Currently Active Plan
            </button>
          </div>

          {/* Monthly Plan */}
          <div className="bg-white shadow-lg rounded-lg p-6 w-full">
            <h2 className="text-xl md:text-2xl font-bold text-center mb-4">
              Monthly
            </h2>
            <p className="text-center text-3xl md:text-4xl font-bold mb-2">
              $9.99<span className="text-lg">/month</span>
            </p>
            <ul className="text-sm md:text-base mb-6">
              <li className="mb-2">✔️ 1,00,000 Words/Month</li>
              <li className="mb-2">✔️ 50+ Template Access</li>
              <li className="mb-2">✔️ Unlimited Download & Copy</li>
              <li>✔️ 1 Year of History</li>
            </ul>
            <Button
              variant={"default"}
              className="font-bold py-2 px-4 rounded w-full flex gap-3"
              onClick={() => createSubscriptions()}
              disabled={loading}
            >
              {loading && <Loader2Icon className="animate-spin" />}
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
