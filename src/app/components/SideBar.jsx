import React from "react";
import { RxCross2 } from "react-icons/rx";
import { RiPoliceBadgeFill } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { FaRegFile } from "react-icons/fa";

function SideBar({ sidebarOpen, setSidebarOpen }) {
  return (
    <>
      <section
        className={`border-r w-[250px] min-h-[100dvh] border-gray-200 bg-white top-0 max-[650px]:absolute 
            duration-700 ease-in-out z-50
            ${sidebarOpen ? "left-0" : "left-[-600px]"}`}
      >
        <div className=" bg-white items-center gap-1 justify-between py-3.5 px-5 border-b hidden max-[650px]:flex max-[650px]:py-5">
          <h1 className=" font-bold text-xl ">WhatBytes</h1>
          <RxCross2
            className=" text-2xl cursor-pointer"
            onClick={() => setSidebarOpen(false)}
          />
        </div>

        <ul className=" py-20 flex flex-col gap-3 max-[650px]:py-12  pr-5">
          <li className=" flex items-center gap-3.5 font-semibold text-gray-600 text-[16px] px-4 tracking-wide hover:bg-[#f6f6f6] py-3.5 rounded-r-full cursor-pointer">
            <RxDashboard className=" text-xl" />
            Dashboard
          </li>
          <li className=" flex items-center gap-3.5 text-[16px] font-bold tracking-wide text-blue-800 bg-[#f2f2f2] py-3.5 rounded-r-full cursor-pointer px-4">
            <RiPoliceBadgeFill className=" text-xl" />
            Skill Test
          </li>
          <li className=" flex items-center gap-3.5 font-semibold text-gray-600  text-[16px] px-4 tracking-wide hover:bg-[#f6f6f6] py-3.5 rounded-r-full cursor-pointer">
            <FaRegFile className=" text-xl" />
            Internship
          </li>
        </ul>
      </section>
    </>
  );
}

export default SideBar;
