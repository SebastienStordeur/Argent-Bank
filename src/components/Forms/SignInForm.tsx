import React from "react";

const SignInForm = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return <form onSubmit={handleSubmit}></form>;
};

export default SignInForm;
