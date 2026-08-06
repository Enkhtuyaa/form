import { useState } from "react";
import { PineconeLogo } from "../icons/PineconeLogo";
import { VectorLogo } from "../icons/VectorLogo";
import { BackVectorLogo } from "../icons/BackVectorLogo"



export const StepThree = (props) =>{



//  if(){
//     props.handleNextStep()
//  }
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
                  Date of birth
                  <span className="text-red-600">*</span>
                </p>
                <input
                  className="w-104 h-11 rounded-lg border border-blue-400"
                  placeholder="--/--/--"
                  type="Date"
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
                onClick={props.handleBackButton}
              >
                <BackVectorLogo />
                Back
              </button>
              <button
                className="w-70 h-11 rounded-md bg-black text-white flex justify-center items-center"
                // onClick={handleNextStep}
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