"use client";
import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";
import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import React, { useContext, useEffect, useState } from "react";

const UsageTrace = () => {
  const { user } = useUser();
  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
  useEffect(() => {
    user && Getdata();
  }, [user]);

  const Getdata = async () => {
    const result = await db
      .select()
      .from(AIOutput)
      .where(
        eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress || "")
      );
    getTotalUsage(result);
    // console.log(result);
  };
  const getTotalUsage = (result: any) => {
    let total: number = 0;
    result.forEach((ele: any) => {
      total = total + Number(ele.aiResponse?.length);
    });
    // console.log(total);
    setTotalUsage(total);
  };
  return (
    <div className="m-5">
      <div className="bg-[#704ef8] text-white rounded-lg p-3">
        <h2 className="font-medium">Credits</h2>
        <div className="h-2 bg-[#9981f9] w-full rounded-full mt-3">
          <div
            className="h-2 bg-white rounded-full"
            style={{ width: (totalUsage / 10000) * 100 + "%" }}
          ></div>
        </div>
        <h2 className="text-sm my-2">{totalUsage}/10,000 credit used</h2>
      </div>
      <Button className="w-full my-3 " variant={"outline"}>
        Upgrade
      </Button>
    </div>
  );
};

export default UsageTrace;
