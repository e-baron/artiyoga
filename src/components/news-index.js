import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import Image from "./image.js";

const NewsIndex = () => {
  const data = useStaticQuery(
    graphql`
      query newsIndex {
        allMdx(
          sort: { fields: frontmatter___creationdate, order: DESC }
          filter: { slug: { regex: "/news/.+/" } }
        ) {
          edges {
            node {
              id
              excerpt
              fields {
                slug
              }
              frontmatter {
                title
                creationdate(formatString: "DD/MM/YYYY")
                featuredImage
              }
            }
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
    `
  );

  const { edges: news } = data.allMdx;

  return (
    <div className="section">
      {news.map(({ node: newsItem }) => (
        <div className="section__content">
          <div className="card">
            <div className="card__image">
              <Link to={newsItem.fields.slug}>
                <Image name={newsItem.frontmatter.featuredImage}></Image>
              </Link>
            </div>
            <div className="card__header">{newsItem.frontmatter.title}</div>
            <div className="card__content">{newsItem.excerpt}</div>
            <div className="card__footer">
              {newsItem.frontmatter.creationdate}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsIndex;
