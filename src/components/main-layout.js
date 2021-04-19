import React from "react";
import { graphql } from "gatsby";
import { useStaticQuery } from "gatsby";
import Header from "./header.js";
import Footer from "./footer.js";
import "../scss/custom-layout.scss";

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
    <div className="d-flex flex-column min-vh-100">
      <Header
        className="mt-0 px-0 sticky-top"
        siteTitle={data.site.siteMetadata.title}
        menuLinks={data.site.siteMetadata.menuLinks}
      />

      <main className="flex-grow-1">
        {children}
      </main>

      <Footer
        className="text-center"
        siteTitle={data.site.siteMetadata.title}
      ></Footer>
    </div>
  );
};

export default MainLayout;
