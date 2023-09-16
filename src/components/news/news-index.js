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
              {newsItem.frontmatter.date}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsIndex;
