import React from "react";
import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";
interface InputProps {
  label: string;
  type: string;
  id: string;
  placeholder?: string;
  register: UseFormRegister<FieldValues>;
  required?: boolean;
  errors?: FieldErrors;
  disabled?: boolean;
}
const Input = ({
  label,
  type,
  id,
  placeholder,
  register,
  required,
}: InputProps) => {
  return (
    <div className="flex flex-col mt-1 mb-2">
      <label htmlFor={id}>{label}</label>
      <input
        className="border-2 border-gray-400 p-2 "
        type={type}
        placeholder={placeholder}
        {...register(id, { required })}
      />
    </div>
  );
};

export default Input;
