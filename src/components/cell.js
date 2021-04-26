import React from "react";
const Cell = ({ children, className}) => {
  return <div {...{className}}>{children}</div>;
};
export default Cell;
