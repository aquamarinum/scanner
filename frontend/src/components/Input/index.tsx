import React from "react";
import { ValidationStatuses } from "../../services/validation/Validator";

type InputProps = {
  value: string;
  setter: (text: string) => void;
  placeholder: string;
  label: ValidationStatuses;
};

const Input: React.FC<InputProps> = ({
  value,
  setter,
  placeholder,
  label = "",
}) => {
  return (
    <div>
      {label !== ValidationStatuses.CORRECT && <p>{label}</p>}
      <input
        type="text"
        value={value}
        onChange={(e) => setter(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
