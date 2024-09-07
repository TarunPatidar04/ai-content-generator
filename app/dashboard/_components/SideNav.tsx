"use client";
import { FileClock, Home, Settings, WalletCards } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import UsageTrace from "./UsageTrace";

const SideNav = () => {
  const menuList = [
    {
      name: "Home",
      icon: Home,
      path: "/dashboard",
    },
    // {
    //   name: "History",
    //   icon: FileClock,
    //   path: "dashboard/history",
    // },
    {
      name: "Billing",
      icon: WalletCards,
      path: "dashboard/billing",
    },
    // {
    //   name: "Setting",
    //   icon: Settings,
    //   path: "dashboard/setting",
    // },
  ];
  const path = usePathname();
  useEffect(() => {
    // console.log(path);
  });
  return (
    <div className="h-screen p-5 shadow-sm border bg-slate-100 relative">
      <div className="flex justify-center">
        <Image src={`/logo.svg`} alt="logo" width={100} height={70} />
      </div>
      <hr className="my-5 border" />
      <div className="mt-3">
        {menuList.map((menu) => (
          <Link href={menu.path}>
            <div
              key={menu.name}
              className={`flex gap-2 mb-2 p-3 cursor-pointer hover:bg-[#704ef8] items-center hover:text-white rounded-md
              `}
            >
              <menu.icon className="h-6 w-6" />
              <h2 className="text-lg">{menu.name}</h2>
            </div>
          </Link>
        ))}
      </div>
      <div className="absolute bottom-10 left-0 w-full">
        <UsageTrace />
      </div>
    </div>
  );
};

export default SideNav;
