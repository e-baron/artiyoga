import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { Message } from "theme-ui";
import { useStaticQuery, graphql, Link } from "gatsby";

const shortcodes = { Link, Message };

const ListLink = (props) => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

const Layout = ({ children }) => {
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
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
      <header style={{ marginBottom: `1.5rem` }}>
        <h1>{data.site.siteMetadata.title}</h1>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline` }}>ArtiYoga TITLE</h3>
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about-me/">About me</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>
      </header>
      <MDXProvider components={shortcodes}>{children}</MDXProvider>
    </div>
  );
};

export default Layout;
