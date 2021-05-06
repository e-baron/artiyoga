import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Carousel as ReactCarousel } from "react-responsive-carousel";
import Background from "../background.js";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Carousel = ({ children, backgroundImageName }) => {
  const data = useStaticQuery(
    graphql`
      query testimonials {
        testimonials: allFile(
          filter: { relativePath: { regex: "/testimonial/.+/" } }
          sort: { fields: childrenMdx___frontmatter___order, order: ASC }
        ) {
          edges {
            node {
              relativePath
              childMdx {
                frontmatter {
                  order
                  author
                  creationdate(formatString: "DD/MM/YYYY")
                  title
                }
                rawBody
                body
              }
            }
          }
        }
      }
    `
  );

  const { edges: testimonials } = data.testimonials;

  const carousel = (
    <ReactCarousel
      infiniteLoop={true}
      useKeyboardArrows={true}
      autoPlay={true}
      interval={5000}
      showStatus={false}
      showThumbs={false}
    >
      {testimonials.map((testimonial, index) => (
        <div className="quote" key={index}>
          <div className="quote__content">
            <h1>
              <MDXRenderer>{testimonial.node.childMdx.body}</MDXRenderer>
            </h1>
            <h4>{testimonial.node.childMdx.frontmatter.author}</h4>
          </div>
        </div>
      ))}
    </ReactCarousel>
  );

  if (backgroundImageName) {
    return (
      <div className="carousel__wrapper">
        <Background imageName={backgroundImageName} className="carousel__wrapper__background">{carousel}</Background>
      </div>
    );
  }
  return <div className="carousel__wrapper">{carousel}</div>;

};

export default Carousel;
