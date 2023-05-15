import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  ref?: React.Ref<HTMLInputElement>;
}

const Input: React.FC<InputProps> = React.forwardRef(({ value, onChange, onBlur, ...rest }, ref) => {
  return <input ref={ref} value={value} onChange={onChange} onBlur={onBlur} {...rest} />;
});

export default React.memo(Input);
