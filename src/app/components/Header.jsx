import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import Image from "next/image";
import logo from "../image/logo.png";
import person from "../image/person.png";

function Header({ setSidebarOpen }) {
  return (
    <>
      <header className="border-b">
        <div className=" flex items-center justify-between px-5 py-3  border-gray-200 min-[2000px]:ml-[50%] min-[2000px]:translate-x-[-50%]">
          <div className=" bg-white flex items-center gap-1 max-[650px]:hidden">
            <Image
              src={logo}
              alt="Logo"
              className="h-[60px] w-[60px] bg-blend-multiply"
            />
            <h1 className=" font-bold text-2xl ">WhatBytes</h1>
          </div>
          <IoMenu
            className=" text-3xl max-[650px]:block hidden"
            onClick={() => setSidebarOpen(true)}
          />
          <div className=" flex items-center gap-3.5 border border-gray-200 px-2.5 py-2 rounded-xl">
            <Image
              src={person}
              alt="person"
              className=" w-[28px] h-[28px] rounded-lg max-[650px]:w-[26px] max-[650px]:h-[26px]"
            />
            <h2 className="font-semibold text-[16px] max-[650px]:text-[14px]">
              Rahil Siddique
            </h2>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
