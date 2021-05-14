import React from "react";
import "./IconButton.scss";

function IconButton({ submit, handleClick, children, ...props }) {
  return (
    <button
      type={submit ? "submit" : "button"}
      className="IconButton btn btn-light p-1"
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
}

export default IconButton;
