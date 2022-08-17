import React, { useRef } from "react";
import { useDispatch } from "react-redux";

import InputValidator from "./InputValidator/InputValidator";
import Input from "../UI/Input";
import { authActions } from "../../store/auth";
import { loginHandler } from "../../services/callAPI";
import { useNavigate } from "react-router-dom";

const SignInForm: React.FC = () => {
  const enteredUsernameInputRef = useRef<HTMLInputElement>(null);
  const enteredPasswordInputRef = useRef<HTMLInputElement>(null);
  const rememberMeValueRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //validation
    const formValues = {
      email: enteredUsernameInputRef.current?.value,
      password: enteredPasswordInputRef.current?.value,
    };
    loginHandler(formValues);
    //si valid alors dispath
    dispatch(authActions.login("Logged in")); //placeholder =>tpoken
    //sinon return

    //redirection
    navigate("/user", { replace: true });
  };
  return (
    <form onSubmit={handleSubmit}>
      <InputValidator className="input-wrapper">
        <label htmlFor="username">Username</label>
        <Input id="username" ref={enteredUsernameInputRef} />
      </InputValidator>
      <InputValidator className="input-wrapper">
        <label htmlFor="password">Password</label>
        <Input id="password" type="password" ref={enteredPasswordInputRef} />
      </InputValidator>
      <InputValidator className="input-remember">
        <Input id="remember-me" type="checkbox" ref={rememberMeValueRef} />
        <label htmlFor="remember-me">Remember me</label>
      </InputValidator>
      <button className="sign-in-button">Sign In</button>
    </form>
  );
};

export default SignInForm;
