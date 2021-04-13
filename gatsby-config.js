const emoji = require(`remark-emoji`);

module.exports = {
  siteMetadata: {
    title: "artiYoga",
    menuLinks: [
      {
        name: `Home`,
        link: `/`,
      },
      {
        name: `About me`,
        link: `/about-me`,       
      },
      {
        name: `News`,
        link: `/news`,
        subMenu: [
          {
            name: `introduction`,
            link: `/news/introduction`,
          },
          {
            name: `Session q2`,
            link: `/news/session-q2`,
          },
          {
            name: `Session q3`,
            link: `/news/session-q3`,
          },
        ],
      },
      {
        name: `Contact`,
        link: `/contact`,
      },
    ],
  },
  plugins: [   
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },   
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages",
      },
      __key: "pages",      
    }, 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'page-content',
        path: `./src/page-content`,
      },
    },   
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              linkImagesToOriginal:	true,
            },
          },
        ],
        extensions: ['.mdx', '.md'], 
        remarkPlugins: [emoji],             
      },
    },
    
  ],
};
