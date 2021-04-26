import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";

const Section = ({ children, backgroundImageName, fullScreen, className }) => {
  const classValue = !fullScreen ? `section ${className}` : `section section--full-screen ${className}`;
  const data = useStaticQuery(graphql`
    {
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
  `);

  if (
    !backgroundImageName ||
    !data.allFile.edges ||
    data.allFile.edges.length === 0
  )
    return <div className={classValue}>{children}</div>;

  const requiredImage = data.allFile.edges.find(
    (image) =>
      image.node.childImageSharp &&
      image.node.childImageSharp.fluid.originalName === backgroundImageName
  );
  console.log("image found", requiredImage);
  if (!requiredImage) {
    return (
      <div className={classValue}>
        <h3 style={{ color: "red" }}>
          The image {backgroundImageName} does not exist !
        </h3>
        {children}
      </div>
    );
  }

  return (
    <div className={classValue}>
      <BackgroundImage
        Tag="section"
        className="section__background-image--full-screen"
        fluid={requiredImage.node.childImageSharp.fluid}
      ></BackgroundImage>
      {children}
    </div>
  );
};

export default Section;
