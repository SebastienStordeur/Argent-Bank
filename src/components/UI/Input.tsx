import React from "react";

interface InputI {
  type?: string;
  className?: string;
  id?: string;
}

const Input: React.FC<InputI> = (props: InputI) => {
  return (
    <input
      type={props.type || "text"}
      className={props.className || ""}
      id={props.id}
    />
  );
};

export default Input;
