import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const NewsIndex = () => {
  const data = useStaticQuery(
    graphql`
    query newsIndex {
      allMdx(
        sort: {fields: frontmatter___creationdate, order: DESC}
        filter: {slug: {regex: "/news/.+/"}}
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
      }
    }
    `
  );

  const { edges: news } = data.allMdx;
 

  return (
    <div>
      <h1>News Index</h1>
      <ul>
        {news.map(({ node: newsItem }) => (
          <li key={newsItem.id}>
            <Link to={newsItem.fields.slug}>
              <h2>{newsItem.frontmatter.title}</h2>
            </Link>
            <Img fluid={newsItem.frontmatter.featuredImage.childImageSharp.fluid} />
            <p>{newsItem.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsIndex;
