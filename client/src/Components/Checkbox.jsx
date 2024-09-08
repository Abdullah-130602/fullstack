import React from "react";
import { Checkbox } from "@material-tailwind/react";

const InputCheckbox = ({
  name,
  id,
  defaultChecked,
  color,
  onChange,
  required,
  label,
  className
}) => {
  return (
    <Checkbox
      id={id}
      name={name}
      onChange={onChange}
      required={required}
      label={label}
      color={color}
      defultchecked={defaultChecked}
      className={className}
    />
  );
};

export default InputCheckbox;
