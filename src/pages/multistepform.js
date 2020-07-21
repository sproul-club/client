import React from "react";
import { useForm, useStep } from "react-hooks-helper";

import "./signup.css";

import SignUpOne from "./signupone.js";
import SignUpTwo from "./signuptwo.js";

const steps = [
  { id: "stepone" },
  { id: "steptwo" },
];

const MultiStepForm = () => {
  const { step, navigation } = useStep({ initialStep: 0, steps });
  const { id } = step;

  const props = { navigation };

  switch (id) {
    case "stepone":
      return <SignUpOne {...props} />;
    case "steptwo":
      return <SignUpTwo {...props} />;
    default:
      return null;
  }
};

export default MultiStepForm;