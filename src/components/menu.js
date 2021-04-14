import React, { useState } from "react";
import { Link } from "gatsby";

const ListLink = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="block lg:align-middle text-blue-200 hover:text-white"
    >
      {children}
    </Link>
  );
};

const Menu = ({ menuLinks, siteTitle }) => {
  const [buttonMenuClicked, setButtonMenuClicked] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-600 p-6 z-0">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">
          {siteTitle}
        </span>
      </div>

      <div className="block lg:hidden z-0">
        <button
          onClick={() => setButtonMenuClicked(!buttonMenuClicked)}
          className="flex items-center px-3 py-2 border rounded text-blue-200 border-teal-400 hover:text-white hover:border-white"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div
        className={
          !buttonMenuClicked
            ? "w-full block flex-grow lg:flex lg:items-center lg:w-auto"
            : "hidden lg:block"
        }
      >
        <div className="text-sm inline-block lg:flex-grow z-0">
          {menuLinks.map((link, index) => (
            <div className="bg-blue-500 group lg:inline-block relative flex-grow flex-shrink-0">
              <div className="bg-blue-500 mx-3">
                <ListLink key={index} to={link.link}>
                  {link.name}
                </ListLink>
              </div>
              {link.subMenu && link.subMenu.length > 0 ? (
                <div className="hidden bg-blue-400 group-hover:block absolute left-3 flex-grow flex-shrink-0 z-10">
                  {link.subMenu.map((subLink, index) => (
                    <div className="mx-3">
                      <ListLink key={index} to={subLink.link}>
                        {subLink.name}
                      </ListLink>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Menu;
