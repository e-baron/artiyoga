import React, { Fragment } from "react";
import { graphql } from "gatsby";
import { useStaticQuery } from "gatsby";
import Header from "./header.js";

const MainLayout = ({ children }) => {
  console.log("Call main layout, children:", children);
  const data = useStaticQuery(
    graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              link
            }
          }
        }
      }
    `
  );

  return (
    <Fragment>
      <Header
        siteTitle={data.site.siteMetadata.title}
        menuLinks={data.site.siteMetadata.menuLinks}
      />

      <main>{children}</main>

      <footer>FOOTER</footer>
    </Fragment>
  );
};

export default MainLayout;
