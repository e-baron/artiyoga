import React from "react";
//import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        siteUrl: url
      }
    }
  }
`;

const Seo = ({ title, description }) => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(query);

  const {
    defaultTitle,
    defaultDescription,
    siteUrl,
  } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    // image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  };

  console.log("seo: URL", `${siteUrl}${pathname}`);

  return (
    <Helmet title={seo.title}>
      <meta name="description" content={seo.description} />

      {seo.url && <meta property="og:url" content={seo.url} />}

      {seo.title && <meta property="og:title" content={seo.title} />}

      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
    </Helmet>
  );
};

export default Seo;
/*
SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  //image: PropTypes.string,
  //article: PropTypes.bool,
};

SEO.defaultProps = {
  title: null,
  description: null,
  //image: null,
  //article: false,
};*/

/*
const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        twitterUsername
      }
    }
  }
`;*/
