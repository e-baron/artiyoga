import React, { useState } from "react";
import { Link } from "gatsby";
// include the JS for the navbar component
import { NavBar } from "bootstrap";

import Icon from "../images/artiyoga.inline.svg";

const Menu = ({ menuLinks, siteTitle, isFullPageLayout }) => {
  return (
    <nav
      className={
        isFullPageLayout
          ? "navbar navbar-expand-lg navbar-light bg-light w-100 navbar-transparent"
          : "navbar navbar-expand-lg navbar-light bg-light w-100 navbar-mattress"
      }
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {siteTitle}

          {/* <Icon className="artiyoga-icon" /> */}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {menuLinks.map((link, index) =>
              link.subMenu && link.subMenu.length > 0 ? (
                <li class="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to={link.link}
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {link.name}
                  </Link>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    {link.subMenu.map((subLink, index) => (
                      <Link
                        className="nav-link active"
                        aria-current="page"
                        to={subLink.link}
                      >
                        {subLink.name}
                      </Link>
                    ))}
                  </ul>
                </li>
              ) : (
                <li class="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to={link.link}
                  >
                    {link.name}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
