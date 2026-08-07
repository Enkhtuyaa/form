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

const ALREADY_TAKEN_USER_NAME = ["bat", "bold", "test", "tuya"];

const checkEachCharacters = (name) => {
  // console.log("checkEachCharacters deer orj irsen name:", name);

  if (ALREADY_TAKEN_USER_NAME.includes(name.toLowerCase())) {
    return false;
    // console.log("ene ner hediinee bna");
  } else {
    return true;
    // console.log("iim nertei baij bolno");
  }

  // if (!taken.includes) {
  //   return false;
  // }
  // return true;
};

// checkEachCharacters("BAT");

// const inputUsername = ""
// if (ALREADY_TAKEN_USER_NAME.includes(inputUsername)) {
//   return false
// }

const getfirstName = () => {
  if (typeof window === "undefined") {
    return null;
  } else {
    const getFirst = JSON.parse(localStorage.getItem("firstName"));
    return getFirst;
  }
};

export const StepOne = (props) => {
  // console.log("props for stepOne: ", props);
  // console.log("step for stepOne: ", props.step);

  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [Username, setUsername] = useState("");
  const [UsernameError, setUsernameError] = useState("");

  const handleFirstNameInputChange = (e) => {
    setFirstName(e.target.value);
    JSON.stringify(localStorage.setItem("firstName", firstName));
    // console.log(e, "this is props")
  };
  //   console.log(firstName);

  const validateFirstName = (firstName) => {
    const allLowerFirstName = firstName.trim().toLowerCase();
    if (allLowerFirstName.length === 0) {
      return "First Name Required";
    } else if (!checkEachCharacter(allLowerFirstName)) {
      return "First Name only contains letter";
    } else {
      return "";
    }
  };
  // console.log(allLowerFirstName);
  // if (!checkEachCharacter(allLowerFirstName)) {
  //   return "First Name only contains letter";
  // } else {
  //   return "";
  // }

  const handleLastNameInputChange = (e) => {
    setLastName(e.target.value);
    JSON.stringify(localStorage.setItem("lastName", lastName));
  };
  
  const validateLastName = (lastName) => {
    const allLowerLastName = lastName.trim().toLowerCase();
    if (allLowerLastName.length === 0) {
      return "Last Name Required";
    } else if (!checkEachCharacter(allLowerLastName)) {
      return "Last Name only contains letter";
    } else {
      return "";
    }
  };

  const handleUsernameInputChange = (e) => {
    setUsername(e.target.value);
    JSON.stringify(localStorage.setItem("Username", Username));
  };

  const validateUsername = (Username) => {
    const allLowerUsername = Username.trim().toLowerCase();
    if (allLowerUsername.length === 0) {
      return "Username Required";
    } else if (!checkEachCharacters(allLowerUsername)) {
      return "Username is already taken";
    } else {
      return "";
    }
  };

  const handleNextButtonClick = () => {
    const firstError = validateFirstName(firstName);
    const lastError = validateLastName(lastName);
    const userError = validateUsername(Username);
    // const userError = validateUsername(Username);
    setFirstNameError(firstError);
    setLastNameError(lastError);
    setUsernameError(userError);
    // setUsernameError(userError);
    // console.log(userError);
    console.log(lastError);
    console.log(firstError);
    console.log(userError);

    if (firstError === "" && lastError === "" && userError === "") {
      props.handleNextStep();
    }
  };

  return (
    <div className="w-120 h-163.75  bg-white  flex justify-center   rounded-lg">
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
              className={`w-104 h-11 rounded-lg border ${firstNameError ? "border-red-400" : "border-blue-400"}`}
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
              className={`w-104 h-11 rounded-lg border ${lastNameError ? "border-red-400" : "border-blue-400"}`}
              placeholder="Last name"
              onChange={handleLastNameInputChange}
              value={lastName}
            />
            <span className="text-red-600 text-sm"> {lastNameError}</span>
            <p className="font-semibold text-sm">
              Username
              <span className="text-red-600 text-sm">*</span>
            </p>
            <input
              className={`w-104 h-11 rounded-lg border  ${UsernameError ? "border-red-400" : "border-blue-400"}`}
              placeholder="Username"
              onChange={handleUsernameInputChange}
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
