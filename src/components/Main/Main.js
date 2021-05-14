import React from "react";

function Main({ children, ...props }) {
  const element = <main {...props}>{children}</main>;
  return element;
}

export default Main;
