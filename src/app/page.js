"use client";
import Image from "next/image";

import { PineconeLogo } from "./icons/PineconeLogo";
import { VectorLogo } from "./icons/VectorLogo";
import { BackVectorLogo } from "./icons/BackVectorLogo";
import { useState } from "react";

function checkLocal() {
  const texts = typeof window !== "undefined" ? localStorage.getItem("texts") : null;

  if (texts) {
    return JSON.parse(texts)
  } else{
    return []
  } 
}
export default function Home() {
  const [steps, setSteps] = useState(1);
  const [text, setTexts] = useState(checkLocal)
  const firstStep = steps === 1;
  const secondStep = steps === 2;
  const thirdStep = steps === 3;
  const final = steps === 4;

  const handleSaveText = (newTexts) => {
    const updatedTexts = [...text, newTexts];
    setTexts(updatedTexts);
    localStorage.setItem("texts", JSON.stringify(updatedTexts));
  };
  const handleStep = () => {
    setSteps(steps + 1);
  };
  const handleBackButton = () => {
    setSteps(steps - 1);
  };
  return (
    <div className="w-screen h-screen flex justify-center items-center ">
      { firstStep && (
        <div className="w-120 h-163.75  flex justify-center  border rounded-lg">
          <div className=" p-8 flex  flex-col justify-between ">
            <div className="w-104 h-96.25 ">
              <span>
                <PineconeLogo />
              </span>
              <p className="font-semibold">Join Us! 😎</p>
              <p className="font-normal text-gray-300">
                Please provide all current information accurately.
              </p>

              <div className="py-7 flex gap-3 flex-col">
                <p className="font-semibold text-sm">
                  First Name
                  <span className="text-red-600 ">*</span>
                </p>
                <input
                  className="w-104 h-11 rounded-lg border border-blue-400"
                  placeholder="Placeholder"
                />
                <p className="font-semibold text-sm">
                  Last Name
                  <span className="text-red-600 text-sm">*</span>
                </p>
                <input
                  className="w-104 h-11 rounded-lg border border-blue-400"
                  placeholder="Placeholder"
                />
                <p className="font-semibold text-sm">
                  Username
                  <span className="text-red-600 text-sm">*</span>
                </p>
                <input
                  className="w-104 h-11 rounded-lg border border-blue-400"
                  placeholder="Placeholder"
                />
              </div>
            </div>
            <button
              className="w-104 h-11 rounded-md bg-black text-white flex justify-center items-center"
              onClick={handleStep}
            >
              Continue 1/3
              <span>
                <VectorLogo />
              </span>
            </button>
          </div>
        </div>
      )}
      {secondStep && (
        <div className="w-120 h-163.75  flex justify-center  border rounded-lg">
          <div className=" p-8 flex  flex-col justify-between ">
            <div className="w-104 h-96.25 ">
              <span>
                <PineconeLogo />
              </span>
              <p className="font-semibold">Join Us! 😎</p>
              <p className="font-normal text-gray-300">
                Please provide all current information accurately.
              </p>

              <div className="py-7 flex gap-3 flex-col">
                <p className="font-semibold text-sm ">
                  Email
                  <span className="text-red-600">*</span>
                </p>
                <input
                  className="w-104 h-11 rounded-lg border border-blue-400"
                  placeholder="Placeholder"
                />
                <p className="font-semibold text-sm">
                  Phone number
                  <span className="text-red-600 text-sm">*</span>
                </p>
                <input
                  className="w-104 h-11 rounded-lg border border-blue-400"
                  placeholder="Placeholder"
                />
                <p className="font-semibold text-sm">
                  Password
                  <span className="text-red-600 text-sm">*</span>
                </p>
                <input
                  className="w-104 h-11 rounded-lg border border-blue-400"
                  placeholder="Placeholder"
                />
                <p className="font-semibold text-sm">
                  Confirm Password
                  <span className="text-red-600">*</span>
                </p>
                <input
                  className="w-104 h-11 rounded-lg border border-blue-400"
                  placeholder="Placeholder"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <button
                className="w-32 h-11 border rounded-md font-medium  flex justify-center items-center"
                onClick={handleBackButton}
              >
                <BackVectorLogo />
                Back
              </button>

              <button
                className="w-70 h-11 rounded-md bg-black text-white flex justify-center items-center"
                onClick={handleStep}
              >
                Continue 2/3
                <span>
                  <VectorLogo />
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
      {thirdStep && (
        <div className="w-120 h-163.75  flex justify-center  border rounded-lg">
          <div className=" p-8 flex  flex-col justify-between ">
            <div className="w-104 h-96.25 ">
              <span>
                <PineconeLogo />
              </span>
              <p className="font-semibold">Join Us! 😎</p>
              <p className="font-normal text-gray-300">
                Please provide all current information accurately.
              </p>

              <div className="py-7 flex gap-3 flex-col">
                <p className="font-semibold text-sm ">
                  Date of birth
                  <span className="text-red-600">*</span>
                </p>
                <input
                  className="w-104 h-11 rounded-lg border border-blue-400"
                  placeholder="--/--/--"
                />
                <p className="font-semibold text-sm">
                  Profile image
                  <span className="text-red-600">*</span>
                </p>
                <div className="w-104 h-45 text-gray-600 flex justify-center items-center">
                  <div>Add image</div>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                className="w-32 h-11 border rounded-md font-medium  flex justify-center items-center"
                onClick={handleBackButton}
              >
              <BackVectorLogo/>
                Back
              </button>
              <button
                className="w-70 h-11 rounded-md bg-black text-white flex justify-center items-center"
                onClick={handleStep}
              >
                Continue 3/3
                <span>
                  <VectorLogo />
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
      ;
    </div>
  );
}
