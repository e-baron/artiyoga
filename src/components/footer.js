import React from "react";
const Footer = ({ siteTitle, ...otherProps}) => {
  const {className} = otherProps;  
  return (
    <footer {...{className}}>
      <h3 className="font-bold">{siteTitle}</h3>     
    </footer>
  );
};
export default Footer;
