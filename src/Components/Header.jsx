import React from "react";
import { LuBriefcase } from "react-icons/lu";
import { LuMessageSquare } from "react-icons/lu";
import { PiHandCoins } from "react-icons/pi";
import { PiBellSimple } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";

export default function Header() {
  return (
    <div className="flex items-center border-b-[1px] shadow-sm text-xl border-b-gray-200 p-6 h-[109px]">
      <span className="bg-gray-200 text-[#d3452f] px-[27px] py-4 ml-4 font-semibold ">
        Logo
      </span>
      <div className=" rounded-full font-normal flex ml-auto mr-auto border-[1.5px] border-gray-100 h-[75px] w-[540px]">
        <div className="flex space-x-[75px] p-2">
          <div className="bg-[#d3452f] text-white border-[#ffb7ac] border-2 w-[110px] h-[55px] py-3 text-center rounded-full">
            <LuBriefcase className="inline text-2xl mr-3 mb-[6px]" />
            <span>Jobs</span>
          </div>
          <div className="flex items-center text-gray-400">
            <span className="bg-red-500 rounded-full w-[6px] h-[6px] absolute left-[583px] top-[44px]"></span>{" "}
            <LuMessageSquare className="inline text-2xl mr-1 mt-1" />{" "}
            <span>Messages</span>
          </div>
          <div className="flex items-center text-gray-400">
            <PiHandCoins className="inline text-2xl mr-1 mt-1" />{" "}
            <span>Payments</span>
          </div>
        </div>
      </div>
      <div className="space-x-3 flex items-center">
      <span className="bg-red-500 rounded-full w-[6px] h-[6px] absolute right-[92px] top-[42px]"></span>{" "}
        <PiBellSimple className="text-2xl" />

        <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTOx-NV6fmQbjl41WbAjcg7LekDVOOREXoyvjFJtyJpx9tmnvP8" className="w-6 h-6 rounded-full"/>
            <IoIosArrowDown/>
      </div>
    </div>
  );
}
