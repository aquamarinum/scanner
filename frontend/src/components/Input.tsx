import React from "react";
import { ValidationStatuses } from "../services/validation/Validator";

type InputProps = {
  value: string;
  setter: (text: string) => void;
  placeholder: string;
  label: ValidationStatuses;
  type?: React.HTMLInputTypeAttribute;
};

const Input: React.FC<InputProps> = ({
  value,
  setter,
  placeholder,
  label = "",
  type,
}) => {
  return (
    <div className="input-container">
      {label !== ValidationStatuses.CORRECT && <p className="label">{label}</p>}
      <input
        className="input"
        type={type}
        value={value}
        onChange={(e) => setter(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
