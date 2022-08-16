import React from "react";

interface ButtonI {
  className?: string;
  label?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonI> = (props) => {
  const { className, label, children } = props;
  return (
    <button className={`${className}`} type="button" aria-label={label || ""}>
      {children}
    </button>
  );
};

export default React.memo(Button);
