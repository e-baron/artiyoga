import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";
/**
 * this will be a section background by default
 * NB : currently, a section background cannot pass extra classes (only .section_background)
 *  */ 
const Background = ({ children, imageName, className }) => {
  //const classValue = `${className ? className : "section__background"}`;
  const classValue = `background ${className ? className : ""}`;
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
    !imageName ||
    !data.allFile.edges ||
    data.allFile.edges.length === 0
  )
    return <div className={classValue}>{children}</div>;

  const requiredImage = data.allFile.edges.find(
    (image) =>
      image.node.childImageSharp &&
      image.node.childImageSharp.fluid.originalName === imageName
  );
  //console.log("image found", requiredImage);
  if (!requiredImage) {
    return (
      <div className={classValue}>
        <h3 style={{ color: "red" }}>
          The image {imageName} does not exist !
        </h3>
        {children}
      </div>
    );
  }

  return (
    <BackgroundImage
      Tag="section"
      className={classValue}
      fluid={requiredImage.node.childImageSharp.fluid}
    >
      {children}
    </BackgroundImage>
  );
};

export default Background;
