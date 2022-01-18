import React from "react";
import "./FormInput.scss";
export const FormInput = ({ handleChange, label, ...rest }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...rest} />
      {label && (
        <label className={`${rest.value && "shrink "} form-input-label`}>
          {label}
        </label>
      )}
    </div>
  );
};
export default FormInput;
