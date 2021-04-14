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
    <div className="grid grid-cols-12 gap-0 min-h-screen">
      <Header
        className="col-span-12"
        siteTitle={data.site.siteMetadata.title}
        menuLinks={data.site.siteMetadata.menuLinks}
      />

      <main className="col-span-12 flex items-center justify-between flex-wrap bg-blue-100 p-6 z-0">{children}</main>

      <Footer
        className="col-span-12 flex flex-grow px-6 items-end mx-auto"
        siteTitle={data.site.siteMetadata.title}
      ></Footer>
    </div>
  );
};

export default MainLayout;
