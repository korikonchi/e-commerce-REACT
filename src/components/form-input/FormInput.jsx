import React from "react";

export const FormInput = ({ handleChange, label, ...otherProps }) => {
  <div className="group">
    <input
      className="form-input"
      value=""
      onChange={handleChange}
      {...otherProps}
    />
  </div>;
};
export default FormInput;
