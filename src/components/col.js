import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";

const Col = ({ children, backgroundImageName, className }) => {
  const classValue = `col-grid__col ${className ? className : ""}`;
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
    /* this creates a section with a background image*/
    <BackgroundImage
      Tag="section"
      className={classValue}
      fluid={requiredImage.node.childImageSharp.fluid}
    >
      {children}
    </BackgroundImage>
  );
};

export default Col;
