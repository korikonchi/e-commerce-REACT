import React from "react";
import "./custom-button.scss";
export const CustomButton = ({ btnGoogle, children, ...rest }) => (
  <button className={`${btnGoogle && "btn-google"} custom-button `} {...rest}>
    <span>{children}</span>
  </button>
);
export default CustomButton;
