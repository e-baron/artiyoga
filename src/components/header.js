import React from "react";
import Menu from "./menu.js";
const Header = ({ siteTitle, menuLinks, isFullPageLayout,...otherProps}) => {
  const {className} = otherProps;  
  return (
    <header {...{className}}>     
      <Menu {...{menuLinks, siteTitle, isFullPageLayout}}></Menu>     
    </header>
  );
};
export default Header;
