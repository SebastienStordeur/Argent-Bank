import React from "react";

interface InputI {
  type?: string;
  className?: string;
  id?: string;
  ref?: React.Ref<HTMLInputElement>;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: any;
}

const Input: React.FC<InputI> = React.forwardRef((props, ref) => {
  return (
    <input
      type={props.type || "text"}
      className={props.className || ""}
      id={props.id}
      ref={ref}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      onBlur={props.onBlur}
    />
  );
});

export default React.memo(Input);
