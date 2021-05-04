import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

/**
 * Based on a name of a picture (WARNING : there cannot be duplicates), fill a container
 * with a picture.
 * NB : the picture is responsive and full fill the container.
 * @param {*} param0 
 * @returns 
 */
const Image = ({ children, name}) => {  
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

  if (!name || !data.allFile.edges || data.allFile.edges.length === 0)
    return <div>{children}</div>;

  const requiredImage = data.allFile.edges.find(
    (image) =>
      image.node.childImageSharp &&
      image.node.childImageSharp.fluid.originalName === name
  );
  //console.log("image found", requiredImage);
  if (!requiredImage) {
    return (
      <div>
        <h3 style={{ color: "red" }}>The image {name} does not exist !</h3>
        {children}
      </div>
    );
  }

  return (
    <Img
      fluid={requiredImage.node.childImageSharp.fluid}     
      style={{ height: "100%", width: "100%" }}
    />
  );
};

export default Image;
