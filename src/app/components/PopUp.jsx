import React, { useState } from "react";
import Html from "../image/HTML.png";
import Image from "next/image";

const PopUp = ({ isOpen, onClose, formData, setFormData }) => {
  const [tempData, setTempData] = useState(formData);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Check if the input is a number
    if (isNaN(value) && value !== "") {
      return;
    }
    setTempData({
      ...tempData,
      [name]: value.trim(),
    });
  };

  const handleSubmit = () => {
    setFormData(tempData);
    onClose();
  };

  const isFormValid = () => {
    return (
      tempData.rank !== "" &&
      tempData.percentile !== "" &&
      Number(tempData.percentile) > 0 &&
      Number(tempData.percentile) <= 100 &&
      tempData.currentScore !== "" &&
      Number(tempData.currentScore) >= 0 &&
      Number(tempData.currentScore) <= 15
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div
        className="bg-white rounded-lg w-[550px] max-[650px]:w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 pb-4 max-[650px]:pb-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Update scores</h2>
            <div className="w-9 h-9 rounded max-[650px]:flex-shrink-0">
              <Image src={Html} alt="Html" />
            </div>
          </div>
        </div>

        {/* Form Content */}
        <div className="px-6 space-y-6 max-[650px]:space-y-3">
          {/* Rank Input */}
          <div className="flex max-[650px]:flex-col justify-between max-[650px]:gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-blue-900 text-white flex items-center justify-center text-sm font-medium">
                1
              </div>
              <label className="text-[15px] font-normal">
                Update your <strong>Rank</strong>
              </label>
            </div>
            <div className=" flex flex-col">
              <input
                type="text"
                name="rank"
                value={tempData.rank}
                onChange={handleChange}
                placeholder="Rank"
                className={`w-36 px-3 py-2 border rounded-md outline-none max-[650px]:w-full
                   ${
                     tempData?.rank === ""
                       ? "border-red-500 "
                       : "border-blue-600 font-semibold"
                   } `}
              />
              {tempData?.rank === "" && (
                <span className=" text-[11px] text-red-500">
                  required I should be number
                </span>
              )}
            </div>
          </div>

          {/* Percentile Input */}
          <div className="flex max-[650px]:flex-col max-[650px]:gap-4 justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-blue-900 text-white flex items-center justify-center text-sm font-medium">
                2
              </div>
              <label className="text-[15px] font-normal">
                Update your <strong>Percentile</strong>
              </label>
            </div>
            <div className=" flex flex-col">
              <input
                type="text"
                name="percentile"
                value={tempData.percentile}
                onChange={handleChange}
                placeholder="Percentile"
                className={`w-36 px-3 py-2 border max-[650px]:w-full rounded-md outline-none 
                   ${
                     tempData?.percentile === "" ||
                     Number(tempData?.percentile) <= 0 ||
                     Number(tempData?.percentile) > 100
                       ? "border-red-500 "
                       : "border-blue-600 font-semibold"
                   } `}
              />
              {(tempData?.percentile === "" ||
                Number(tempData?.percentile) <= 0 ||
                Number(tempData?.percentile) > 100) && (
                <span className=" text-[11px] text-red-500">
                  required percentile 0-100
                </span>
              )}
            </div>
          </div>

          {/* Current Score Input */}
          <div className="flex max-[650px]:flex-col justify-between max-[650px]:gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-blue-900 max-[650px]:flex-shrink-0 text-white flex items-center justify-center text-sm font-medium">
                3
              </div>
              <label className="text-[15px] font-normal">
                Update your <strong>Current Score (out of 15)</strong>
              </label>
            </div>
            <div className=" flex flex-col">
              <input
                type="text"
                name="currentScore"
                value={tempData.currentScore}
                onChange={handleChange}
                placeholder="Current Score"
                className={`w-36 px-3 py-2 border rounded-md outline-none  max-[650px]:w-full
                   ${
                     tempData?.currentScore === "" ||
                     Number(tempData?.currentScore) < 0 ||
                     Number(tempData?.currentScore) > 15 ||
                     isNaN(tempData?.currentScore)
                       ? "border-red-500 "
                       : "border-blue-600 font-semibold"
                   } `}
              />
              {(tempData?.currentScore === "" ||
                Number(tempData?.currentScore) < 0 ||
                Number(tempData?.currentScore) > 15 ||
                isNaN(tempData?.currentScore)) && (
                <span className=" text-[11px] text-red-500">
                  required score 0-15
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 p-6 max-[650px]:py-4">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={!isFormValid()}
            className={`px-4 py-2 rounded-md flex items-center text-white ${
              !isFormValid()
                ? "bg-blue-300  cursor-not-allowed"
                : "bg-blue-700  hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            }`}
          >
            Save
            <span className="ml-2">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
