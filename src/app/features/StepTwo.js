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

const Password = "asdfghjklpou";
const checkEachPassword = (value) => {
  for (let i = 0; i < value.length; i++) {
    if (!Password.includes(value[i])) {
      return false;
    }
  }
  return true;
};


export const StepTwo = (props) => {
  // const [steps, setSteps] = useState(1);
  const [Email, setEmail] = useState("");
  const [EmailError, setEmailError] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [PhoneNumberError, setPhoneNumberError] = useState("");
  const [Password, setPassword] = useState("");
  const [PasswordError, setPasswordError] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [ConfirmPasswordError, setConfirmPasswordError] = useState("");
  // const steps = props.steps;
  // console.log("steps for stepTwo", steps);

  const handleEmailInputChange = (e) => {
    setEmail(e.target.value);
    // console.log(e, "this is props")
  };

  const validateEmail = (Email) => {
    const allLowerEmail = Email.trim().toLowerCase();
    if (allLowerEmail.length === 0) {
      return "Username Required";
    } else if (!checkEachCharacter(allLowerEmail)) {
      return "Username only contains letter";
    } else {
      return "";
    }
  };

  const handlePhoneNumberInputChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const validatePhoneNumber = (PhoneNumber) => {
    const allLowerPhoneNumber = PhoneNumber.trim().toLowerCase();
    if (allLowerPhoneNumber.length === 0) {
      return "Phone number required";
    } else if (allLowerPhoneNumber.length < 8) {
      return "Phone number has less than 8 digits";
    } else if (!checkEachNumbers(allLowerPhoneNumber)) {
      return "Phone number only contains number";
    } else {
      return "";
    }
  };

  const handlePasswordInputChange = (e) => {
    setPassword(e.target.value);
  };

  const validatePassword = (Password) => {
    const allLowerPassword = Password.trim().toLowerCase();
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

  const handleConfirmInputChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const validateConfirmPassword = (ConfirmPassword) => {
    if (ConfirmPassword.length === 0) {
      return "Confirm password required";
    } else if (Password !== ConfirmPassword) {
      return "Passwords and Confirm Password do not match";
    } else {
      return ""
    }
  };
  const handleNextButtonClick = () => {
    const EmailError = validateEmail(Email);
    setEmailError(EmailError);

    const PhoneNumberError = validatePhoneNumber(PhoneNumber);
    setPhoneNumberError(PhoneNumberError);

    const PasswordError = validatePassword(Password);
    setPasswordError(PasswordError);

    const ConfirmPasswordError = validateConfirmPassword(ConfirmPassword);
    setConfirmPasswordError(ConfirmPasswordError)

    if (EmailError === "" && PhoneNumberError === "" && PasswordError === "" && ConfirmPasswordError==="") {
      props.handleNextStep()
      
    }
  };

  return (
    <div className="w-120 min-h-full  flex justify-center  border rounded-lg">
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
              className= { `w-104 h-11 rounded-lg border ${EmailError ? "border-red-400" : "border-blue-400"}`}
              placeholder="Email"
              onChange={handleEmailInputChange}
              value={Email}
            />
            <span className="text-red-600 text-sm"> {EmailError}</span>
            <p className="font-semibold text-sm">
              Phone number
              <span className="text-red-600 text-sm">*</span>
            </p>
            <input
              className= { `w-104 h-11 rounded-lg border ${PhoneNumberError ? "border-red-400" : "border-blue-400"}`}
              placeholder="Phone number"
              onChange={handlePhoneNumberInputChange}
              value={PhoneNumber}
            />
            <span className="text-red-600 text-sm"> {PhoneNumberError}</span>
            <p className="font-semibold text-sm">
              Password
              <span className="text-red-600 text-sm">*</span>
            </p>
            <input
              className=  { `w-104 h-11 rounded-lg border ${PasswordError ? "border-red-400" : "border-blue-400"}`}
              placeholder="Password"
              onChange={handlePasswordInputChange}
              value={Password}
            />
            <span className="text-red-600 text-sm"> {PasswordError}</span>
            <p className="font-semibold text-sm">
              Confirm Password
              <span className="text-red-600">*</span>
            </p>
            <input
              className=  { `w-104 h-11 rounded-lg border ${ ConfirmPasswordError ? "border-red-400" : "border-blue-400"}`}
              placeholder="Confirm password"
              onChange={handleConfirmInputChange}
              value={ConfirmPassword}
            />
       <span className="text-red-600 text-sm"> {ConfirmPasswordError}</span>
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
