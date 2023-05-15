import { FC } from "react";
import SignInForm from "../components/Forms/SigninForm/SignInForm";

const Loginpage: FC = () => {
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign in</h1>
        <SignInForm />
      </section>
    </main>
  );
};

export default Loginpage;
