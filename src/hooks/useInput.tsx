import React, { useState } from "react";

interface UseInputI {}

const useInput = (validateValue: any) => {
  /*   const [enteredValue, setEnteredValue] = useState<string>("");
  const [isTouched, setIsTouched] = useState<boolean>(false);

  const valueIsValid = "validateValue(enteredValue)";
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setEnteredValue(event.currentTarget.value);
  };

  const inputBlurHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  }; */
};

export default useInput;
