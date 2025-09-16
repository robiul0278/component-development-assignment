import React from "react";

interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  loading?: boolean;
  variant?: "filled" | "outlined" | "ghost";
  size?: "sm" | "md" | "lg";
  type?: "text" | "password";
}

const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled = false,
  invalid = false,
  variant = "outlined",
  size = "md",
  type = "text",
}) => {
  const baseStyles =
    "rounded-md w-full focus:outline-none transition-colors relative";
  const sizes = {
    sm: "px-2 py-1 text-sm",
    md: "px-3 py-2 text-base",
    lg: "px-4 py-3 text-lg",
  };
  const variants = {
    filled: "bg-gray-100 border border-transparent focus:border-blue-500",
    outlined: "border border-gray-300 focus:border-blue-500",
    ghost: "bg-transparent border-b border-gray-400 focus:border-blue-500",
  };

  return (
    <div className="flex flex-col gap-1 relative">
      {label && <label className="text-sm font-medium">{label}</label>}
      <input
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        className={`
          ${baseStyles}
          ${sizes[size]}
          ${variants[variant]}
          ${disabled ? "bg-gray-200 cursor-not-allowed" : ""}
          ${invalid ? "border-red-500 focus:border-red-500" : ""}
        `}
      />
      {helperText && !errorMessage && (
        <p className="text-xs text-gray-500">{helperText}</p>
      )}
      {errorMessage && (
        <p className="text-xs text-red-500">{errorMessage}</p>
      )}
    </div>
  );
};

export default InputField;
