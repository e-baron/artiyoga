import React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Link, useStaticQuery } from "gatsby";
import { Message } from "theme-ui";
import MainLayout from "../components/main-layout.js";

const shortcodes = { Link, Message };

export default function PageTemplate({ data: { mdx } }) {
  
  return (
    <MainLayout>
      <div>
        <h3>{mdx.frontmatter.title}</h3>
        <MDXProvider components={shortcodes}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </div>
    </MainLayout>
  );
}

export const pageQuery = graphql`
  query($slug: String) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      body
      slug
      frontmatter {
        title
      }
    }
  }
`;
