import React from "react";

const Button = ({ onClick, type, label }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full text-white bg-orange-600 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      {label}
    </button>
  );
};

export default Button;
