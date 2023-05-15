import React, { Dispatch, SetStateAction } from "react";
import axios from "axios";

import Button from "../../UI/Button";
import Input from "../../UI/Input";
import InputValidator from "../InputValidator/InputValidator";
import useInput from "../../../hooks/useInput";

interface EditFormI {
  setState: Dispatch<SetStateAction<boolean>>;
}

const letterRegex = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;

const isNotEmpty: any = (value: string) => value.trim() !== "";
const isValidName: any = (value: string) => letterRegex.test(value) && isNotEmpty && value.length >= 3;

const EditForm: React.FC<EditFormI> = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput(isValidName);

  const {
    value: enteredFirstname,
    isValid: enteredFirstnameIsValid,
    hasError: firstnameInputHasError,
    valueChangeHandler: firstnameChangeHandler,
    inputBlurHandler: firstnameBlurHandler,
    reset: resetFirstnameInput,
  } = useInput(isValidName);

  const token = localStorage.getItem("token");

  let formIsValid: boolean = false;

  if (enteredFirstnameIsValid && enteredNameIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formIsValid) return;

    const formValues = {
      firstName: enteredFirstname,
      lastName: enteredName,
    };

    try {
      axios
        .put("http://localhost:3001/api/v1/user/profile", formValues, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        })
        .then(() => {
          resetFirstnameInput();
          resetNameInput();
          props.setState(false);
          window.location.reload();
        })
        .catch((error) => console.error(error));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="edit-form">
        <InputValidator className="input-wrapper">
          <Input
            id="firstName"
            className="edit-input"
            placeholder="FirstName"
            value={enteredFirstname}
            onChange={firstnameChangeHandler}
            onBlur={firstnameBlurHandler}
          />
          {firstnameInputHasError && <p className="error-input">Invalid field</p>}
        </InputValidator>
        <InputValidator className="input-wrapper">
          <Input id="lastname" className="edit-input" placeholder="LastName" value={enteredName} onChange={nameChangeHandler} onBlur={nameBlurHandler} />
          {nameInputHasError && <p className="error-input">Invalid field</p>}
        </InputValidator>
      </div>
      <div className="flex">
        <Button type="submit" label="Save modifications" className="edit-button">
          Save
        </Button>
        <Button label="Cancel modifications" className="edit-button" onClick={() => props.setState(false)}>
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default EditForm;
