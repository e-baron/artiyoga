import React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Link } from "gatsby";
import { Message } from "theme-ui";
import Img from "gatsby-image";
import MainLayout from "../components/main-layout.js";
import NewsIndex from "../components/news-index.js";
import Section from "../components/section.js";
import Cell from "../components/cell.js";
import Grid from "../components/grid.js";
import Item from "../components/item.js";
import Col from "../components/col.js";
import Image from "../components/image.js";

const shortcodes = { Link, Message, NewsIndex, Section, Cell, Grid, Item , Col, Image};

/**
 * A page that has not frontmatter title is considered as being a fullPageLayout
 * => Menu will always be at the top
 * @param {*} param0 
 * @returns 
 */

export default function PageTemplate({ data: { mdx } }) {
  const isFullPageLayout = !mdx.frontmatter.title;
  return (
    <MainLayout {...{isFullPageLayout}} >
      <div className="container-fluid">
        {!isFullPageLayout && (
          <div className="row">
            <div className="col mt-2">
              <h3 className="text-center">{mdx.frontmatter.title}</h3>
            </div>
          </div>
        )}
        {mdx.frontmatter.featuredImage && (
          <div className="row">
            <div className="col-6 mx-auto">
              <Img
                fluid={mdx.frontmatter.featuredImage.childImageSharp.fluid}
              />
            </div>
          </div>
        )}
        <div className="row">
          <div className={! isFullPageLayout ? "col" : "col p-0 m-0"}>
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
