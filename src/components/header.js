import React from "react";
import Menu from "./menu.js";
const Header = ({ siteTitle, menuLinks }) => {
  return (
    <header>
      <h1>{siteTitle}</h1>
      <Menu menuLinks={menuLinks}></Menu>
    </header>
  );
};
export default Header;
