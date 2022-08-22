import React, { useRef, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

import InputValidator from "./InputValidator/InputValidator";
import Input from "../UI/Input";
import { authActions } from "../../store/auth";
/* import { loginHandler } from "../../services/Login"; */
import { useNavigate } from "react-router-dom";

const SignInForm: React.FC = () => {
  const enteredUsernameInputRef = useRef<HTMLInputElement>(null);
  const enteredPasswordInputRef = useRef<HTMLInputElement>(null);
  const rememberMeValueRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [token, setToken] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    //validation
    const formValues = {
      email: enteredUsernameInputRef.current?.value,
      password: enteredPasswordInputRef.current?.value,
    };

    try {
      axios
        .post("http://localhost:3001/api/v1/user/login", formValues)
        .then((res) => {
          if (res.status !== 200) return;

          setToken(res.data.body.token);
          dispatch(authActions.login("token"));
          navigate("/user", { replace: true });
        });

      /* loginHandler(formValues, token); */
      //si valid alors dispath
    } catch (error) {}

    //sinon return

    //redirection
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
