import React from "react";
import InputValidator from "./InputValidator/InputValidator";
import Input from "../UI/Input";

const SignInForm: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <InputValidator className="input-wrapper">
        <Input id="username" />
      </InputValidator>
      <InputValidator className="input-wrapper">
        <Input id="password" type="password" />
      </InputValidator>
      <InputValidator className="input-remember">
        <Input id="remember-me" type="checkbox" />
      </InputValidator>
      <button className="sign-in-button">Sign In</button>
    </form>
  );
};

export default SignInForm;
