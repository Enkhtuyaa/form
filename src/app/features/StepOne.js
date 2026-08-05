import { useState } from "react";
import { PineconeLogo } from "../icons/PineconeLogo";
import { VectorLogo } from "../icons/VectorLogo";

const letters = "qwertyuiopasdfghjklzxcvbnm";
const checkEachCharacter = (value) => {
  for (let i = 0; i < value.length; i++) {
    if (!letters.includes(value[i])) {
      return false;
    }
  }
  return true;
};

const letters1 = "qwertyuiopasdfghjklzxcvbnm";
const checkEachCharacter1 = (value1) => {
  for (let i = 0; i < value1.length; i++) {
    if (!letters1.includes(value1[i])) {
      return false;
    }
  }
  return true;
};
const ALREADY_TAKEN_USER_NAME = ["bat", "bold", "test", "tuya"];

const checkEachCharacter2 = (value3) => {
  for (let i = 0; i < value3.length; i++) {
    if (!ALREADY_TAKEN_USER_NAME.includes(value3[i])) {
      return false;
    }
  }
  return true;
};
export const StepOne = (props) => {
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [Username, setUsername] = useState("");
  const [UsernameError, setUsernameError] = useState("");

  const handleFirstNameInputChange = (e) => {
    setFirstName(e.target.value);
    // console.log(e, "this is props")
  };
  //   console.log(firstName);
  const validateFirstName = (firstName) => {
    const allLowerFirstName = firstName.trim().toLowerCase();
    if (!checkEachCharacter(allLowerFirstName)) {
      return "First Name only contains letter";
    } else {
      return "";
    }
  };
  const handleLastNameInputChange1 = (e) => {
    setLastName(e.target.value);
  };
  const validateLastName1 = (lastName) => {
    const allLowerLastName = lastName.trim().toLowerCase();
    if (!checkEachCharacter1(allLowerLastName)) {
      return "Last Name only contains letter";
    } else {
      return "";
    }
  };
  const handleUsernameInputChange2 = (e) => {
    setUsername(e.target.value);
  };
  const validateUsername = (Username) => {
    const allLowerUsername = Username.toLowerCase();
    if (!checkEachCharacter2(allLowerUsername)) {
      return "Username only contains letter";
    } else {
      return "";
    }
  };
  const handleNextButtonClick = () => {
    const firstError = validateFirstName(firstName);
    const lastError = validateLastName1(lastName);
    const userError = validateUsername(Username);
    setFirstNameError(firstError);
    setLastNameError(lastError);
    setUsernameError(userError);
    if (firstError === "" && lastError === "" && userError === "") {
      props.handleNextStep();
    }
  };

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
            <p className="font-semibold text-sm">
              First Name
              <span className="text-red-600 ">*</span>
            </p>
            <input
              className="w-104 h-11 rounded-lg border  border-blue-400  "
              placeholder="First name"
              onChange={handleFirstNameInputChange}
              value={firstName}
            />
            <span className="text-red-600 text-sm"> {firstNameError}</span>
            <p className="font-semibold text-sm">
              Last Name
              <span className="text-red-600 text-sm">*</span>
            </p>
            <input
              className="w-104 h-11 rounded-lg border border-blue-400"
              placeholder="Last name"
              onChange={handleLastNameInputChange1}
              value={lastName}
            />
            <span className="text-red-600 text-sm"> {lastNameError}</span>
            <p className="font-semibold text-sm">
              Username
              <span className="text-red-600 text-sm">*</span>
            </p>
            <input
              className="w-104 h-11 rounded-lg border border-blue-400"
              placeholder="Username"
              onChange={handleUsernameInputChange2}
              value={Username}
            />
             <span className="text-red-600 text-sm"> {UsernameError}</span>
          </div>
        </div>
        <button
          className="w-104 h-11 rounded-md bg-black text-white flex justify-center items-center"
          onClick={handleNextButtonClick}
        >
          Continue <span> {props.steps}/3</span>
          <span>
            <VectorLogo />
          </span>
        </button>
      </div>
    </div>
  );
};
