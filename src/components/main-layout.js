import React from "react";
import { graphql } from "gatsby";
import { useStaticQuery } from "gatsby";
import PageHeader from "./page-header.js";
import SectionHeader from "./section-header.js";
import Section from "./section.js";
import Content from "./content.js";
import Header from "./header.js";
import Footer from "./footer.js";
import Image from "./image.js";
import SEO from "./seo/seo.js";
//import { Helmet } from "react-helmet";
import "../scss/main.scss";

const MainLayout = ({
  children,
  navbarExtraStyles,
  headerImage,
  featuredImage,
  pageTitle,
  allImages,
  frontmatter,
}) => {
  const data = useStaticQuery(
    graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              link
              subMenu {
                link
                name
              }
            }
          }
        }
      }
    `
  );

  console.log("main-layout:", navbarExtraStyles, featuredImage, frontmatter);

  return (
    <div className="master">
      {/* Dealing with Meta Tags : page title.... 
      Use the SEO component*/}
      {/* <Helmet>{pageTitle && <title>{pageTitle}</title>}</Helmet> */}
      <SEO
        title={pageTitle}
        {...(frontmatter ? { description: frontmatter.description } : {})}
      />

      <Header
        siteTitle={data.site.siteMetadata.title}
        menuLinks={data.site.siteMetadata.menuLinks}
        {...(navbarExtraStyles ? { navbarExtraStyles: navbarExtraStyles } : {})}
        {...(headerImage ? { headerImage: headerImage } : {})}
      />

      <main className="main">
        {featuredImage && (
          <div>
            <Section>
              <SectionHeader className="section__header--left">
                {pageTitle}
              </SectionHeader>
              <Content className="vh-50">
                <Image name={featuredImage} />{" "}
              </Content>
            </Section>
          </div>
        )}
        {children}
      </main>

      <Footer siteTitle={data.site.siteMetadata.title}></Footer>
    </div>
  );
};

export default MainLayout;
