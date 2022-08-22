import React, { useRef } from "react";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import InputValidator from "../InputValidator/InputValidator";

const EditForm: React.FC = () => {
  const firstNameInputRef = useRef<HTMLInputElement>(null);
  const lastNameInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
      </div>
    </form>
  );
};

export default EditForm;
