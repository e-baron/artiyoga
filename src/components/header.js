import React from "react";
import Menu from "./menu.js";
const Header = ({ siteTitle, menuLinks, ...otherProps}) => {
  const {className} = otherProps;  
  return (
    <header {...{className}}>     
      <Menu {...{menuLinks, siteTitle}}></Menu>     
    </header>
  );
};
export default Header;
