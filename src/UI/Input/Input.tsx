import React from 'react';
import './Input.css';

interface IInputProps {
  value?: string;
  onChange?: React.ChangeEventHandler;
  name?: string;
  id?: string;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  className?: string;
}

const Input: React.FC<IInputProps> = ({
  value,
  onChange,
  name,
  id,
  type,
  placeholder,
  disabled,
  required,
  className,
}) => {
  return (
    <>
      <input
        value={value}
        onChange={onChange}
        name={name}
        id={id}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        className={className}
      />
    </>
  );
};

export default Input;
