import React, { Dispatch, SetStateAction, useRef } from "react";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import InputValidator from "../InputValidator/InputValidator";
import axios from "axios";

interface EditFormI {
  setState: Dispatch<SetStateAction<boolean>>;
}

const EditForm: React.FC<EditFormI> = (props) => {
  const firstNameInputRef = useRef<HTMLInputElement>(null);
  const lastNameInputRef = useRef<HTMLInputElement>(null);
  const token = localStorage.getItem("token");

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formValues = {
      firstName: firstNameInputRef.current?.value,
      lastName: lastNameInputRef.current?.value,
    };

    axios
      .put("http://localhost:3001/api/v1/user/profile", formValues, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => console.log(res));
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="edit-form">
        <InputValidator className="input-wrapper">
          <Input
            id="firstName"
            ref={firstNameInputRef}
            className="edit-input"
            placeholder="FirstName"
          />
        </InputValidator>
        <InputValidator className="input-wrapper">
          <Input
            id="lastname"
            ref={lastNameInputRef}
            className="edit-input"
            placeholder="LastName"
          />
        </InputValidator>
      </div>
      <div className="flex">
        <Button
          type="submit"
          label="Save modifications"
          className="edit-button"
        >
          Save
        </Button>
        <Button
          label="Cancel modifications"
          className="edit-button"
          onClick={() => props.setState(false)}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default EditForm;
