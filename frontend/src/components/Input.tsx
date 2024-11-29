import React from "react";

type InputProps = {
  value: string;
  setter: (text: string) => void;
  placeholder: string;
  label?: string | null;
  type?: React.HTMLInputTypeAttribute;
};

const Input: React.FC<InputProps> = ({
  value,
  setter,
  placeholder,
  label = null,
  type,
}) => {
  return (
    <div className="input-container">
      {label && <p className="label">{label}</p>}
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
