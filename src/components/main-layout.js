import React from "react";
import { graphql } from "gatsby";
import { useStaticQuery } from "gatsby";
import Header from "./header.js";
import Footer from "./footer.js";
import "./main-layout-style.css";

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
    // <div className="grid grid-cols-12 grid-flow-row auto-rows-min min-h-screen gap-0 bg-tertiary-900 text-tertiaryTwin">
       <div className="flex flex-col min-h-screen gap-0 bg-tertiary-900 text-tertiaryTwin">
      <Header
        className=""
        siteTitle={data.site.siteMetadata.title}
        menuLinks={data.site.siteMetadata.menuLinks}
      />

      <main className="flex-grow bg-secondary-100 text-secondaryTwin p-6">{children}</main>

      <Footer
        className="col-span-12 mb-0 mx-auto bg-tertiary-900 text-tertiaryTwin"
        siteTitle={data.site.siteMetadata.title}
      ></Footer>
    </div>
  );
};

export default MainLayout;
