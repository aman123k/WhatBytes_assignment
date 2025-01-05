import React from "react";
import CircularProgress from "../chart/CircularProgress";

function Syllabus({ formData }) {
  const syllabusAnalysis = [
    { topic: "HTML Tools, Forms, History", score: 80 },
    { topic: "Tags & References in HTML", score: 60 },
    { topic: "Tables & References in HTML", score: 24 },
    { topic: "Tables & CSS Basics", score: 96 },
  ];

  return (
    <section className=" w-[40%] mt-20 flex flex-col gap-8 max-[1050px]:w-full max-[1050px]:mt-0">
      <div className="bg-white px-5 py-8 rounded-lg border flex flex-col gap-10">
        <h2 className="text-lg font-bold text-[#000]">
          Syllabus Wise Analysis
        </h2>
        <div className="space-y-6">
          {syllabusAnalysis.map((item, index) => (
            <div key={index}>
              <div className="flex justify-between mb-2">
                <span className="text-gray-700">{item.topic}</span>
                <span
                  className={`font-semibold ${
                    item.score >= 90
                      ? "text-green-600"
                      : item.score < 90 && item.score >= 80
                      ? "text-blue-600"
                      : item.score >= 60
                      ? "text-orange-500"
                      : "text-red-500"
                  }`}
                >
                  {item.score}%
                </span>
              </div>
              <div
                className={`w-full bg-gray-200 rounded-full h-2 ${
                  item.score >= 90
                    ? "bg-green-100"
                    : item.score < 90 && item.score >= 80
                    ? "bg-blue-200"
                    : item.score >= 60
                    ? "bg-orange-100"
                    : "bg-red-100"
                }`}
              >
                <div
                  className={`h-2 rounded-full ${
                    item.score >= 90
                      ? "bg-green-500"
                      : item.score < 90 && item.score >= 80
                      ? "bg-blue-600"
                      : item.score >= 60
                      ? "bg-orange-400"
                      : "bg-red-400"
                  }`}
                  style={{ width: `${item.score}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Question Analysis */}
      <div className="bg-white p-5 rounded-lg  border">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-[#000]">Question Analysis</h2>
          <span className="text-blue-800 font-bold ">
            {formData?.currentScore}/15
          </span>
        </div>
        <p className="text-gray-600 text-[16px]">
          <strong>
            You scored {formData?.currentScore} questions correct out of 15.
          </strong>{" "}
          However it still needs some improvements
        </p>
        <div className="flex justify-center">
          <CircularProgress value={formData?.currentScore} total={15} />
        </div>
      </div>
    </section>
  );
}

export default Syllabus;
