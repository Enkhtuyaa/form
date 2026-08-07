import { useState } from "react";
import { PineconeLogo } from "../icons/PineconeLogo";
import { VectorLogo } from "../icons/VectorLogo";
import { BackVectorLogo } from "../icons/BackVectorLogo";
import { Icon } from "../icons/Icon";
import Image from "next/image";

export const StepThree = (props) => {
  const [Date, setDate] = useState("");
  const [DateError, setDateError] = useState("");
  const [Picture, setPicture] = useState("");
  const [PictureError, setPictureError] = useState("");

  const handleDateInputChange = (e) => {
    setDate(e.target.value);
  };

  const validateDate = (Date) => {
    if (!Date) {
      return "Please select a date.";
    } else {
      return "";
    }
  };

  const handlePictureInputChange = (e) => {
    setPicture(e.target.files[0]);
  };

// const handlePictureInputChange = (e) => {
//   // Файл сонгосон эсэхийг баталгаажуулна
//   if (e.target.files && e.target.files[0]) {
//     setPicture(e.target.files[0]);
//   }
// };

  const validatePicture = (Picture) => {
    if (!Picture) {
      return "Image cannot be blank";
    } else {
      return "";
    }
  };

  const handleNextButtonClick = () => {
    const DateError = validateDate(Date);
    setDateError(DateError);

    const PictureError = validatePicture(Picture);
    setPictureError(PictureError);

    if (DateError === "" && PictureError === "") props.handleNextStep();
  };

  return (
    <div className="w-120 h-163.75 bg-white  flex justify-center   rounded-lg">
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
              onChange={handleDateInputChange}
            />
            <span className="text-red-600 text-sm"> {DateError}</span>
            <p className="font-semibold text-sm">
              Profile image
              <span className="text-red-600">*</span>
            </p>
            <label className="w-104 h-45 rounded-md bg-gray-200 flex items-center justify-center cursor-pointer overflow-hidden relative">
              <input
                type="file"
                accept="Image/*"
                onChange={handlePictureInputChange}
                className="hidden"
                // onChange={(e) => console.log(e.target.files[0])}
              />
              {Picture ? (
                <Image
                  src={URL.createObjectURL(Picture)} // 1. (Picture)-ийг нэмж функцээ дуудна
                  alt="Profile preview"
                  fill // 2. Хүрээгээ дүүргэж харуулах
                  unoptimized // 3. Blob URL дээр Next.js алдаа гарахаас сэргийлнэ
                  className="object-cover"
                />
              ) : (
                <div className="flex flex-col justify-center items-center  gap-2">
                  <div className=" w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <Icon />
                  </div>
                  <span className="text-center">Add image</span>
                </div>
              )}
            </label>
            <span className="text-red-600 text-sm"> {PictureError}</span>
            {/* <input className="w-104 h-45 text-gray-600 flex justify-center items-center bg-gray-200 rounded-lg border-amber-700 " /> */}
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
  );
};
