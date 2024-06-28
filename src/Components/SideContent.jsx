import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { LuPencil } from "react-icons/lu";
import { TbUsers } from "react-icons/tb";
import { TbUserCheck } from "react-icons/tb";
import { FiEye } from "react-icons/fi";
import { LuMessageSquare } from "react-icons/lu";
export default function SideContent() {
  return (
    <div className="relative w-[345px] z-40 float-right h-[180vh] border-l-[2px] shadow-sm border-gray-300">
      <div className="space-x-2 py-8 px-4 inline-flex">
        <button className="rounded-md font-semibold border-[#d3452f] border-[1px] bg-[#fff1ee] text-[#d3452f] w-[155px] text-sm py-2">
          <RiDeleteBin6Line className="inline mr-1 mb-[2px]" /> Delete job
        </button>
        <button className="rounded-md font-semibold  border-[#ffd5cb] border-[2px] text-white bg-[#d3452f] w-[155px] text-sm py-2">
          <LuPencil className="inline mr-1 mb-[2px]" />
          Edit job
        </button>
      </div>
      <div className="border-b-[1px] text-gray-500 font-semibold p-4 mr-7 ml-7 border-gray-200">
        <div className="inline-flex z-50">
          <span className="inline-flex relative right-[20px] ">
            <TbUsers className="mr-10 ml-3 text-xl font-bold mt-1 " />
            <h2 className="relative right-7 ">Applicants</h2>
          </span>
          <span className=" text-xl relative left-[80px] text-gray-700 font-bold bottom-[3px]">
            400
          </span>
        </div>
      </div>
      <div className="border-b-[1px] text-gray-500 font-semibold p-4 mr-7 ml-7 border-gray-200">
        <div className="inline-flex">
          <span className="inline-flex relative right-[20px]">
            <TbUserCheck className="mr-10 ml-3 text-xl font-bold mt-1" />{" "}
            <h2 className="relative right-7">Matches</h2>
          </span>
          <span className=" text-xl relative left-[95px] text-gray-700 font-bold bottom-[3px]">
            100
          </span>
        </div>
      </div>
      <div className="border-b-[1px] text-gray-500 font-semibold p-4 mr-7 ml-7 border-gray-200">
        <div className="inline-flex">
          <span className="inline-flex relative right-[20px]">
            <LuMessageSquare className="mr-10 ml-3 text-xl font-bold mt-1" />{" "}
            <h2 className="relative right-7">Messages</h2>
          </span>
          <span className=" text-xl relative left-[85px] text-gray-700 font-bold bottom-[3px]">
            147
          </span>
        </div>
      </div>
      <div className=" text-gray-500 font-semibold p-4 mr-7 ml-7 border-gray-200">
        <div className="inline-flex">
          <span className="inline-flex relative right-[20px]">
            <FiEye className="mr-10 ml-3 text-xl font-bold mt-1" />{" "}
            <h2 className="relative right-7">Views</h2>
          </span>
          <span className=" text-xl relative left-[112px] text-gray-700 font-bold bottom-[3px]">
            800
          </span>
        </div>
      </div>
    </div>
  );
}
