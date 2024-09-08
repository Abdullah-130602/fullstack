import React from "react";

const Input = ({ type, name, id, className, placeholder, onChange, required }) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-600 focus:border-orange-600 block w-full p-2.5 ${className}`}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
    />
  );
};

export default Input;
