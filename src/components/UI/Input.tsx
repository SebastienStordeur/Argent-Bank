import React from "react";

interface InputI {
  type?: string;
  className?: string;
  id?: string;
  ref?: React.Ref<HTMLInputElement>;
  placeholder?: string;
}

const Input: React.FC<InputI> = React.forwardRef((props: InputI, ref) => {
  return (
    <input
      type={props.type || "text"}
      className={props.className || ""}
      id={props.id}
      ref={ref}
      placeholder={props.placeholder}
    />
  );
});

export default React.memo(Input);
