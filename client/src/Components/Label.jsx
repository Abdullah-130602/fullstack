import React from "react";

const Label = ({ htmlFor, label }) => {
  return (
    <label
      htmlFor={htmlFor}
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      {label}
    </label>
  );
};

export default Label;
