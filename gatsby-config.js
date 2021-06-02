const emoji = require(`remark-emoji`);

module.exports = {
  pathPrefix: `/artiyoga`,
  siteMetadata: {
    title: "artiYoga",
    description: "artiYoga : Yoga in 1500 Halle with Kati Baroni",
    url: "https://www.artiyoga.com", // No trailing slash allowed!
    //image: "/images/snape.jpg", // Path to your image you placed in the 'static' folder
    //twitterUsername: "@occlumency",
    menuLinks: [
      {
        name: `Home`,
        link: `/`,
      },
      {
        name: "Lessen",
        link: "",
        subMenu: [
          { name: "Groeplessen", link: "/lessons/groups" },
          { name: "Bedrijfslessen", link: "/lessons/companies" },
          { name: "Privé Yoga", link: "/lessons/personal" },
          { name: "Online Yoga", link: "/lessons/online" },
          { name: "Video Yogaopnames", link: "/lessons/video" },
        ],
      },
      {
        name: `About`,
        link: ``,
        subMenu: [
          {
            name: `Kati`,
            link: `/about/kati`,
          },
          {
            name: `Yogastijlen`,
            link: `/about/yogastyles`,
          },
        ],
      },
      {
        name: `News`,
        link: `/news`,
      },
      {
        name: `Contact`,
        link: `/contact`,
      },
    ],
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-image`,
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
      resolve: "gatsby-source-filesystem",
      options: {
        name: "page-content",
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
              linkImagesToOriginal: true,
            },
          },
        ],
        extensions: [".mdx", ".md"],
        remarkPlugins: [emoji],
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `artiYoga`,
        short_name: `artiYoga`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/om.svg`,
        purpose: `any maskable`,
      },
    },
    `gatsby-plugin-offline`,
    "gatsby-plugin-robots-txt",
    /*
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // In your gatsby-transformer-remark plugin array
        plugins: [{
          resolve: 'gatsby-remark-emojis',
          options: {
            // Deactivate the plugin globally (default: true)
            active : true,
            // Add a custom css class
            //class  : 'emoji-icon',
            // In order to avoid pattern mismatch you can specify
            // an escape character which will be prepended to the
            // actual pattern (e.g. `#:poop:`).
            escapeCharacter : '', // (default: '')
            // Select the size (available size: 16, 24, 32, 64)
            size   : 16,
            
          }
        }]
      }
    }*/
  ],
};
