import { useState } from "react";
import { PineconeLogo } from "../icons/PineconeLogo";
import { VectorLogo } from "../icons/VectorLogo";
import { BackVectorLogo } from "../icons/BackVectorLogo";

const checkEachCharacter = (email) => {
  // console.log("checkEachCharacter" , target)
  if (!email.includes("@")) {
    // console.log("email dotor @ bhgu bna");
    return false;
  }
  // console.log("email dotor @ bna");
  return true;
};

const numbers = "1234567890";
const checkEachNumbers = (value) => {
  for (let i = 0; i < value.length; i++) {
    if (!numbers.includes(value[i])) {
      // console.log(numbers)
      return false;
    }
  }
  return true;
};

const Password = "!@#$%^&*()_+";
const checkEachPassword = (value) => {
  for (let i = 0; i < value.length; i++) {
    if (Password.includes(value[i])) {
      return false;
    }
  }
  return true;
};

const getEmail = () => {
  if (typeof window === "undefined") {
    return null;
  } else {
    const getEmail = JSON.parse(localStorage.getItem("Email"));
  }
};

const initialValues = {
  Email: "",
  PhoneNumber: "",
  Password: "",
  ConfirmPassword: "",
};

const initialErrorValue = {
  EmailError: "",
  PhoneNumberError: "",
  PasswordError: "",
  ConfirmPasswordError: "",
};
export const StepTwo = (props) => {
  const [stepTwoValues, setStepTwoValues] = useState(initialValues);
  const [stepTwoErrors, setStepTwoErrors] = useState(initialErrorValue);

  const handleInputChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    console.log(key, value)
    setStepTwoValues({ ...stepTwoValues, [key]: value });
  }; 

  const validateEmail = (email) => {
    const allLowerEmail = email.trim().toLowerCase();
    if (allLowerEmail.length === 0) {
      return "Username Required";
    } else if (!checkEachCharacter(allLowerEmail)) {
      return "Username only contains letter";
    } else {
      return "";
    }
  };

  const validatePhoneNumber = (phoneNumber) => {
    const allLowerPhoneNumber = phoneNumber.trim();
    if (allLowerPhoneNumber.length === 0) {
      return "Phone number is required" ;
    } else if (allLowerPhoneNumber.length < 8) {
      return "Phone number has less than 8 digits" ;
    } else if (!checkEachNumbers(allLowerPhoneNumber)) {
      return "Phone number only contains number";
    } else { 
       return "";
    }
  };

  const validatePassword = (password) => {
    const allLowerPassword = password.trim();
    if (allLowerPassword.length === 0) {
      return "Password required";
    } else if (allLowerPassword.length < 10) {
      return "Password has less than 10 digits";
    } else if (!checkEachPassword(allLowerPassword)) {
      return "Password only contains letters";
    } else {
      return "";
    }
  };

  const validateConfirmPassword = (confirmPassword, password) => {
     const allLowerConfirmPassword = confirmPassword.trim();
     const allLowerPassword = password.trim()
    if (allLowerConfirmPassword.length === 0) {
      return "Confirm password required";
    } else if (allLowerConfirmPassword !== allLowerPassword) {
      return "Passwords and Confirm Password do not match";
    } else {
      return "";
    }
  };
  
  const handleNextButtonClick = () => {
    const errors = {
      EmailError: validateEmail( stepTwoValues.Email),
      PhoneNumberError: validatePhoneNumber(stepTwoValues.PhoneNumber),
      PasswordError: validatePassword( stepTwoValues.Password),
      ConfirmPasswordError: validateConfirmPassword(stepTwoValues.ConfirmPassword, stepTwoValues.Password),
    };
    setStepTwoErrors(errors);
    // console.log(errors, "this is the errors");
    const objecttrue = Object.values(errors).every((error) => error === "")
    if(objecttrue){
      props.handleNextStep()
    }
  
  };

  return (
    <div className="w-120 min-h-full   bg-white  flex justify-center   rounded-lg">
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
              className={`w-104 h-11 rounded-lg border ${stepTwoErrors.EmailError ? "border-red-400" : "border-blue-400"}`}
              placeholder="Email"
              onChange={handleInputChange}
              name="Email"
              value={stepTwoValues.Email}
            />
            <span className="text-red-600 text-sm"> {stepTwoErrors.EmailError}</span>
            <p className="font-semibold text-sm">
              Phone number
              <span className="text-red-600 text-sm">*</span>
            </p>
            <input
              className={`w-104 h-11 rounded-lg border ${stepTwoErrors.PhoneNumberError ? "border-red-400" : "border-blue-400"}`}
              placeholder="Phone number"
              onChange={handleInputChange}
              name="PhoneNumber"
              value={stepTwoValues.PhoneNumber}
            />
            <span className="text-red-600 text-sm"> {stepTwoErrors.PhoneNumberError}</span>
            <p className="font-semibold text-sm">
              Password
              <span className="text-red-600 text-sm">*</span>
            </p>
            <input
              className={`w-104 h-11 rounded-lg border ${stepTwoErrors.PasswordError ? "border-red-400" : "border-blue-400"}`}
              placeholder="Password"
              onChange={handleInputChange}
              name="Password"
              value={stepTwoValues.Password}
            />
            <span className="text-red-600 text-sm"> {stepTwoErrors.PasswordError}</span>
            <p className="font-semibold text-sm">
              Confirm Password
              <span className="text-red-600">*</span>
            </p>
            <input
              className={`w-104 h-11 rounded-lg border ${stepTwoErrors.ConfirmPasswordError ? "border-red-400" : "border-blue-400"}`}
              placeholder="Confirm password"
              onChange={handleInputChange}
              name="ConfirmPassword"
              value={stepTwoValues.ConfirmPassword}
            />
            <span className="text-red-600 text-sm">
              {" "}
              {stepTwoErrors.ConfirmPasswordError}
            </span>
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
