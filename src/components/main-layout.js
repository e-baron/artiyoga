import React from "react";
import { graphql } from "gatsby";
import { useStaticQuery } from "gatsby";
import Header from "./header.js";
import Footer from "./footer.js";
import "../scss/main.scss";

/**
 *
 * @param {boolean} isFullPageLayout : if full page layout, each <Section> is full screen :
 * - the header is fixed at the top (of first section only ?)
 * - the footer is not provided (it shall be dealt with in a Section)
 * Else (regular page layout) :
 * - the header is alway at the top. By default it is sticked.
 * - the footer is after the main content, the page.
 * @returns
 */

const MainLayout = ({ children, isFullPageLayout }) => {
  console.log("layout full page:", isFullPageLayout);
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
        className={!isFullPageLayout ? "mt-0 px-0 sticky-top" : "main-header"}
        siteTitle={data.site.siteMetadata.title}
        menuLinks={data.site.siteMetadata.menuLinks}
        {...{isFullPageLayout}}
      />

      <main className="flex-grow-1">{children}</main>

      {!isFullPageLayout && (
        <Footer
          className="text-center"
          siteTitle={data.site.siteMetadata.title}
        ></Footer>
      )}
    </div>
  );
};

export default MainLayout;
