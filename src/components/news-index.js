import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

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
      <h3>News Index</h3>

      {news.map(({ node: newsItem }) => (
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-sm-4">
              <div className="m-4">
                <Link to={newsItem.fields.slug}>
                  <Img
                    fluid={
                      newsItem.frontmatter.featuredImage.childImageSharp.fluid
                    }
                  />
                </Link>
              </div>
            </div>
            <div className="col-sm-8">
              <div className="card-body">
                <h5 className="card-title">{newsItem.frontmatter.title}</h5>
                <p className="card-text">{newsItem.excerpt}</p>
                <p className="card-text">
                  <small className="text-muted">
                    {newsItem.frontmatter.creationdate}
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsIndex;
