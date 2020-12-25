import React from "react";
import "./button.css";

const Button = ({
  color = "primary",
  onClick,
  disabled,
  type = "button",
  children,
}) => {
  return (
    <button
      className={`butt butt-${color}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
