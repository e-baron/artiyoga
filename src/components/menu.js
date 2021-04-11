import React from "react";
import { Link } from "gatsby";

const ListLink = (props) => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

const Menu = ({ menuLinks }) => {
  console.log("Menu CALLED");
  return (
    <nav>
      <div class="navbar">
        {menuLinks.map((link) => (
          <ListLink to={link.link}>
            {link.name}
            {link.subMenu && link.subMenu.length > 0 ? (
              <div class="subnav">
                {link.subMenu.map((subLink) => (
                  <ListLink to={subLink.link}>{subLink.name}</ListLink>
                ))}
              </div>
            ) : null}
          </ListLink>
        ))}
      </div>
    </nav>
  );
};

export default Menu;
