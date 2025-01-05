import Image from "next/image";
import Html from "../image/HTML.png";
import LineChartComponent from "../chart/LineChart";

export default function SkillTestCard({ setIsOpen, formData }) {
  return (
    <section className=" w-[63%] flex-shrink-0 py-8 flex flex-col gap-8 max-[1050px]:w-full max-[650px]:gap-4">
      {/* Skills Test */}
      <div className=" flex flex-col gap-5">
        <h1 className=" text-lg font-semibold text-[#8f8f8f]">Skill Test</h1>
        <div
          className="flex items-center justify-between border border-gray-200 rounded-lg px-4 py-6 max-[650px]:flex-col
          max-[650px]:gap-4
        "
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded max-[650px]:flex-shrink-0">
              <Image src={Html} alt="Html" />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-[#000] font-sans">
                Hyper Text Markup Language
              </h1>
              <p className="text-gray-600 text-[16px]">
                Questions: 08 | Duration: 15 mins I Submitted on 5 June 2021
              </p>
            </div>
          </div>
          <button
            className="px-6 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 font-semibold border-2 border-blue-900 max-[650px]:w-full"
            onClick={() => setIsOpen(true)}
          >
            Update
          </button>
        </div>
      </div>

      {/* Quick Statistics */}
      <section className="border border-gray-200 rounded-lg px-4 py-4">
        <h1 className=" text-[#000] font-bold text-lg tracking-wide">
          Quick Statistics
        </h1>
        <div className=" flex items-center justify-between px-8 py-5 max-[850px]:flex-col max-[850px]:gap-8 max-[850px]:px-4">
          <div className=" flex items-center gap-3 max-[850px]:gap-6 max-[650px]:items-baseline max-[850px]:w-full">
            <h6 className=" bg-[#edf7ff] border px-4 py-3 text-xl rounded-full w-max flex items-center justify-center">
              🏆
            </h6>
            <div>
              <h3 className=" font-bold text-lg font-sans">{formData?.rank}</h3>
              <span className=" text-[14px] font-semibold text-[#505050]">
                YOUR RANK
              </span>
            </div>
          </div>
          <div className=" flex items-center gap-3 max-[850px]:gap-6 max-[850px]:border-none max-[850px]:px-0 max-[850px]:items-baseline max-[850px]:w-full border-l border-r px-[5%]">
            <h6 className=" bg-[#edf7ff] border px-4 py-3 text-xl rounded-full w-max flex items-center justify-center">
              🗒️
            </h6>
            <div>
              <h3 className=" font-bold text-lg font-sans">
                {formData?.percentile}%
              </h3>
              <span className=" text-[14px] font-semibold text-[#505050]">
                PERCENTILE
              </span>
            </div>
          </div>
          <div className=" flex items-center gap-3 max-[850px]:gap-6 max-[650px]:items-baseline max-[850px]:w-full">
            <h6 className=" bg-[#edf7ff] border px-4 py-3 text-xl rounded-full w-max flex items-center justify-center">
              ✅
            </h6>
            <div>
              <h3 className=" font-bold text-lg font-sans">
                {formData?.currentScore}/15
              </h3>
              <span className=" text-[14px] font-semibold text-[#505050]">
                CORRECT ANSWERS
              </span>
            </div>
          </div>
        </div>
      </section>
      <LineChartComponent />
    </section>
  );
}
