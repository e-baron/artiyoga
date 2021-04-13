import React, { Fragment } from "react";
import { graphql } from "gatsby";
import { useStaticQuery } from "gatsby";
import Header from "./header.js";
import Footer from "./footer.js";

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
              subMenu {
                link
                name
              }
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

      <Footer siteTitle={data.site.siteMetadata.title}></Footer>
    </Fragment>
  );
};

export default MainLayout;
