import React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Link } from "gatsby";
import { Message } from "theme-ui";
import MainLayout from "../components/main-layout.js";
import NewsIndex from "../components/news-index.js";
import Image from "../components/image.js";
import Section from "../components/section.js";
import Content from "../components/content.js";
import Background from "../components/background.js";
import SectionHeader from "../components/section-header.js";
import SectionFooter from "../components/section-footer.js";
import PageHeader from "../components/page-header.js";
import Carousel from "../components/carousel/carousel.js";
import { withFrontmatter } from "../components/hoc/hoc.js";

const shortcodes = {
  Link,
  Message,
  NewsIndex,
  Image,
  Section,
  Content,
  Background,
  SectionHeader,
  SectionFooter,
  PageHeader,
  Carousel,
};

export default function PageTemplate({ data: { mdx } }) {
  shortcodes.PageHeader = withFrontmatter(PageHeader, mdx.frontmatter);

  console.log("page:", mdx.frontmatter.navbarExtraStyles);

  return (
    <MainLayout
      {...(mdx.frontmatter.navbarExtraStyles
        ? { navbarExtraStyles: mdx.frontmatter.navbarExtraStyles }
        : {})}
      {...(mdx.frontmatter.headerImage
        ? { headerImage: mdx.frontmatter.headerImage }
        : {})}
    >
      <MDXProvider components={shortcodes}>
        <div className="page">
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </div>
      </MDXProvider>
    </MainLayout>
  );
}

export const pageQuery = graphql`
  query pagesAndImages($slug: String) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      body
      slug
      frontmatter {
        title
        creationdate(formatString: "DD/MM/YYYY")
        navbarExtraStyles
        headerImage
        featuredImage
      }
    }
    allFile(filter: { sourceInstanceName: { eq: "images" } }) {
      edges {
        node {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4608) {
              ...GatsbyImageSharpFluid_withWebp
              originalName
            }
          }
        }
      }
    }
  }
`;
