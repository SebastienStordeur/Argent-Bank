import React from "react";

interface InputI {
  type?: string;
  className?: string;
  id?: string;
  ref?: any; //MutableRefObject<HTMLInputElement>;
}

const Input: React.FC<InputI> = (props: InputI) => {
  return (
    <input
      type={props.type || "text"}
      className={props.className || ""}
      id={props.id}
      ref={props.ref}
    />
  );
};

export default React.memo(Input);
