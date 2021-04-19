import React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Link } from "gatsby";
import { Message } from "theme-ui";
import Img from "gatsby-image";
import MainLayout from "../components/main-layout.js";
import NewsIndex from "../components/news-index.js";


const shortcodes = { Link, Message, NewsIndex };

export default function PageTemplate({ data: { mdx } }) {
  return (
    <MainLayout>
      <div class="container-fluid">
        <div class="row">
          <div class="col">
            <h3 className="text-center">{mdx.frontmatter.title}</h3>            
          </div>
        </div>
        <div class="row">
          <div class="col-6 mx-auto">            
            {mdx.frontmatter.featuredImage ? (
              <Img
                fluid={mdx.frontmatter.featuredImage.childImageSharp.fluid}
              />              
            ) : null}
          </div>
        </div>
        <div class="row">
          <div class="col mt-2">
            <MDXProvider components={shortcodes}>
              <MDXRenderer>{mdx.body}</MDXRenderer>
            </MDXProvider>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export const pageQuery = graphql`
  query newsPage($slug: String) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      body
      slug
      frontmatter {
        title
        creationdate(formatString: "DD/MM/YYYY")
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
