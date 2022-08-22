import React, { useRef } from "react";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import InputValidator from "../InputValidator/InputValidator";
import axios from "axios";

const EditForm: React.FC = () => {
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
      <InputValidator className="input-wrapper">
        <Input id="firstName" ref={firstNameInputRef} />
      </InputValidator>
      <InputValidator className="input-wrapper">
        <Input id="lastname" ref={lastNameInputRef} />
      </InputValidator>
      <div>
        <Button type="submit" label="Save modifications">
          Save
        </Button>
        <Button label="Cancel modifications">Cancel</Button>
        <button type="submit">Envoyer</button>
      </div>
    </form>
  );
};

export default EditForm;
