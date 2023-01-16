import React, { useState } from "react";
import "./FormInput.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputprops } = props;
  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <div className="FormInput">
      <label>{label}</label>
      <input
        {...inputprops}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputprops.name === "confirmpassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
