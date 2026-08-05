import { useState } from "react";
import { PineconeLogo } from "../icons/PineconeLogo";
import { VectorLogo } from "../icons/VectorLogo";
import { BackVectorLogo } from "../icons/BackVectorLogo";

 export const StepTwo = (props) => {
    const [steps, setSteps] = useState(1);

const handleBackButton = () => setSteps(steps - 1);
 
const handleNextButtonClick = () =>{

}
    return (
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
                onClick={handleNextButtonClick}
              >
                Continue <span> {props.steps}/3</span>
                <span>
                  <VectorLogo />
                </span>
              </button>
            </div>
          </div>
        </div>
    )
 }