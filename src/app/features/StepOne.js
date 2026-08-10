import { useState } from "react";
import { PineconeLogo } from "../icons/PineconeLogo";
import { VectorLogo } from "../icons/VectorLogo";
import { FormInput } from "../Components/FormInput";
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
};

const getfirstName = () => {
  if (typeof window === "undefined") {
    return null;
  } else {
    const getFirst = JSON.parse(localStorage.getItem("firstName"));
    return getFirst;
  }
};

const initialValues = {
  firstName: "",
  lastName: "",
  Username: "",
};
const initialErrorValue = {
  firstNameError: "",
  lastNameError: "",
  UsernameError: "",
};
export const StepOne = (props) => {
  // console.log("props for stepOne: ", props);
  // console.log("step for stepOne: ", props.step);
  const [stepOneValues, setStepOneValues] = useState(initialValues);
  const [stepOneErrors, setStepOneErrors] = useState(initialErrorValue);

  const handleInputChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    // console.log(name,value)
    setStepOneValues({ ...stepOneValues, [key]: value });
  };

  const validateName = (label, name) => {
    // console.log("validateName", name);
    const allLowerFirstName = name.trim().toLowerCase();
    if (allLowerFirstName.length === 0) {
      return `${label} is required`;
    } else if (!checkEachCharacter(allLowerFirstName)) {
      return `${label} cannot contain special characters or number.`;
    } else {
      return "";
    }
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
    const errors = {
      firstNameError: validateName("First Name", stepOneValues.firstName),
      lastNameError: validateName("Last Name", stepOneValues.lastName),
      UsernameError: validateUsername(stepOneValues.Username),
    };
    setStepOneErrors(errors);

    const objecttrue = Object.values(errors).every((error) => error === "")
     if(objecttrue) {
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
            <FormInput
              label="First Name"
              value={stepOneValues.firstName}
              name="firstName"
              onChange={handleInputChange}
              error={stepOneErrors.firstNameError}
            />
            <FormInput
              label="Last Name"
              value={stepOneValues.lastName}
              name="lastName"
              onChange={handleInputChange}
              error={stepOneErrors.lastNameError}
            />
            <FormInput
              label="Username"
              value={stepOneValues.Username}
              name="Username"
              onChange={handleInputChange}
              error={stepOneErrors.UsernameError}
            />
            {/* <p className="font-semibold text-sm">
              Username
              <span className="text-red-600 text-sm">*</span>
            </p>
            <input
              className={`w-104 h-11 rounded-lg border  ${stepOneErrors.UsernameError ? "border-red-400" : "border-blue-400"}`}
              placeholder="Username"
              onChange={handleInputChange}
              name="Username"
              value={stepOneValues.Username}
            />
            <span className="text-red-600 text-sm">
              {" "}
              {stepOneErrors.UsernameError}
            </span> */}
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
