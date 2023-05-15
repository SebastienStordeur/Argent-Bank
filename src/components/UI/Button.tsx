import React, { ButtonHTMLAttributes, Dispatch, SetStateAction } from "react";

interface ButtonI {
  className?: string;
  label?: string;
  children: React.ReactNode;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  onClick?: Dispatch<SetStateAction<boolean>>;
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonI> = (props) => {
  return (
    <button
      className={`${props.className}`}
      type={props.type || "button"}
      aria-label={props.label || ""}
      onClick={() => (props.onClick ? props.onClick(true) : null)}
    >
      {props.children}
    </button>
  );
};

export default React.memo(Button);
