import React, { Fragment } from "react";
import { graphql } from "gatsby";
import { Link, useStaticQuery } from "gatsby";

const MainLayout = ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  return (
    <Fragment>
      <header>
        <h1>{data.site.siteMetadata.title}</h1>
      </header>
      <main>{children}</main>
      <footer>FOOTER</footer>
    </Fragment>
  );
};

export default MainLayout;
