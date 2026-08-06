"use client";

import { PineconeLogo } from "./icons/PineconeLogo";
import { VectorLogo } from "./icons/VectorLogo";
import { BackVectorLogo } from "./icons/BackVectorLogo";
import { useState } from "react";
import { StepOne } from "./features/StepOne";
import { StepTwo } from "./features/StepTwo";
import { StepThree } from "./features/StepThree";
import { StepFinal } from "./features/StepFinal";

export default function Home() {
  const [steps, setSteps] = useState(1);

  const firstStep = steps === 1;
  const secondStep = steps === 2;
  const thirdStep = steps === 3;
  const final = steps === 4;

  const handleNextStep = () => {
    setSteps(steps + 1);
  };

  const handleBackButton = () => {
    setSteps(steps - 1);
  };
  return (
    <div className="w-screen h-screen flex justify-center items-center ">
      {firstStep && <StepOne step={steps} handleNextStep={handleNextStep} />}
      {secondStep && (
        <StepTwo
          steps={steps}
          handleNextStep={handleNextStep}
          handleBackButton={handleBackButton}
        />
      )}
      {thirdStep && (
        <StepThree
          steps={steps}
          handleNextStep={handleNextStep}
          handleBackButton={handleBackButton}
        />
      )}
      {final && (
       <StepFinal/>
      )}
    </div>
  );
}
