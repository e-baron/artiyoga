import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Image from "../image.js";

/**
 * Provides an excerpt of 100 chars (see pruneLenght in graphql query)
 * @returns 
 */
const NewsIndex = () => {
  const data = useStaticQuery(
    graphql`{
      allMdx(
         sort: [{ frontmatter: { date: DESC } }, ]
        filter:{ fields: { slug: { regex: "/news/.+/" } }, frontmatter: { offline: { ne: true } } }
      ) {
        edges {
          node {
            id
            excerpt(pruneLength: 100)
            fields {
              slug
            }
            frontmatter {
              featuredImage
              title
              date
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
        <div className="section__content section__content--no-grow-for-single-content">
          <div className="card card--with-light-color">
            <div className="card__image vh-40">
              <Link to={newsItem.fields.slug}>
                <Image name={newsItem.frontmatter.featuredImage}></Image>
              </Link>
            </div>
            <div className="card__header">{newsItem.frontmatter.title}</div>
            <div className="card__content card__content--is-one-column">{newsItem.excerpt}</div>
            <div className="card__footer">
              {newsItem.frontmatter.date}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsIndex;
