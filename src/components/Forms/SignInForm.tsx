import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import InputValidator from "./InputValidator/InputValidator";
import Input from "../UI/Input";
import { authActions } from "../../../store/auth";

const SignInForm: React.FC = () => {
  const enteredUsernameInputRef = useRef<HTMLInputElement>();
  const enteredPasswordInputRef = useRef<HTMLInputElement>();
  const rememberMeValueRef = useRef<HTMLInputElement>();

  const dispatch = useDispatch();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //validation

    //si valid alors dispath
    dispatch(authActions.login);
    //sinon return

    //redirection
  };
  return (
    <form onSubmit={handleSubmit}>
      <InputValidator className="input-wrapper">
        <Input id="username" ref={enteredUsernameInputRef} />
      </InputValidator>
      <InputValidator className="input-wrapper">
        <Input id="password" type="password" ref={enteredPasswordInputRef} />
      </InputValidator>
      <InputValidator className="input-remember">
        <Input id="remember-me" type="checkbox" ref={rememberMeValueRef} />
      </InputValidator>
      <button className="sign-in-button">Sign In</button>
    </form>
  );
};

export default SignInForm;
