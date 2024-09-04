import { Search } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <div className="p-5 shadow-sm border-b-2 flex justify-between items-center bg-slate-100">
      <div className="flex gap-2 items-center p-2 rounded-md max-w-lg bg-slate-100">
        <Search />
        <input type="text" placeholder="Search" className="outline-none bg-slate-100" />
      </div>
      <div>
        <h2 className="bg-[#704ef8] p-1 rounded-full md:block hidden text-xs text-white px-2">
          ️‍🔥Join Membership just for $9.99/month
        </h2>
      </div>
    </div>
  );
};

export default Header;
