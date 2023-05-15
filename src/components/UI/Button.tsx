import { ButtonHTMLAttributes, Dispatch, ReactNode, SetStateAction, memo } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  label?: string;
  onClick?: () => Dispatch<SetStateAction<boolean>>;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, ...rest }) => {
  return (
    <button onClick={() => (onClick ? onClick : null)} {...rest}>
      {children}
    </button>
  );
};

export default memo(Button);
