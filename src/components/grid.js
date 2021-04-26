import React from "react";

const Grid = ({ children, className }) => {
  const classValue = `col-grid ${className ? className : ""}`;

  return <div className={classValue}>{children}</div>;
};

export default Grid;
