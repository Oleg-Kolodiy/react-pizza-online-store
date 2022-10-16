import React from "react";
import ClassNames from "classnames";
const Button = ({ onClick, children, className, outline }) => {
  return (
    <button
      onClick={onClick}
      className={ClassNames("button", className, {
        "button--outline": outline,
      })}
    >
      {children}
    </button>
  );
};

export default Button;
