"use client";
import Image from "next/image";
import Header from "./components/Header";
import SkillTestCard from "./components/SkillTestCard";
import Syllabus from "./components/Syllabus";
import SideBar from "./components/SideBar";
import { useState } from "react";
import PopUp from "./components/PopUp";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [formData, setFormData] = useState({
    rank: "1",
    percentile: "30",
    currentScore: "10",
  });

  return (
    <section className={`${sidebarOpen ? "h-screen overflow-scroll" : ""}`}>
      <Header setSidebarOpen={setSidebarOpen} />
      <div className=" flex min-[2000px]:ml-[50%] min-[2000px]:translate-x-[-50%]">
        <SideBar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
        <div className=" flex max-[1050px]:flex-col px-8 max-[650px]:px-4 gap-8 max-[1050px]:gap-2">
          <SkillTestCard setIsOpen={setIsOpen} formData={formData} />
          <Syllabus formData={formData} />
        </div>
      </div>
      <PopUp
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        formData={formData}
        setFormData={setFormData}
      />
    </section>
  );
}
