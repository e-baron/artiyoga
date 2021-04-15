import React from "react";
import Menu from "./menu.js";
const Header = ({ siteTitle, menuLinks, ...otherProps}) => {
  const {className} = otherProps;  
  return (
    <header {...{className}}>
      <h1 className="text-center">{siteTitle}</h1>
      <Menu {...{menuLinks, siteTitle}}></Menu>
    </header>
  );
};
export default Header;
