import React from "react";
import { graphql } from "gatsby";
import { useStaticQuery } from "gatsby";
import Header from "./header.js";
import Footer from "./footer.js";
import "../scss/main.scss";

const MainLayout = ({ children, navbarExtraStyles, headerImage }) => {
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

  console.log("main-layout:", navbarExtraStyles, headerImage);

  return (
    <div className="master">
      <Header
        siteTitle={data.site.siteMetadata.title}
        menuLinks={data.site.siteMetadata.menuLinks}
        {...(navbarExtraStyles ? { navbarExtraStyles: navbarExtraStyles } : {})}
        {...(headerImage ? { headerImage: headerImage } : {})}
      />

      <main className="main">{children}</main>

      <Footer siteTitle={data.site.siteMetadata.title}></Footer>
    </div>
  );
};

export default MainLayout;
