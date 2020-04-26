require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

let siteUrl = 'http://localhost';

if (process.env.CONTEXT === 'deploy-preview') {
  siteUrl = process.env.DEPLOY_PRIME_URL;
}

if (process.env.CONTEXT === 'production') {
  siteUrl = process.env.URL;
}

module.exports = {
  siteMetadata: {
    title: `Angus Perkerson - Software Engineer`,
    description: `Software Engineer specializing in UI and Applicaton development.`,
    author: `Angus Perkerson <angusp@angusp.com>`,
    email: `angusp@angusp.com`,
    image: '/images/angus-perkerson.jpg',
    twitter: 'angusp',
    url: siteUrl,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-ghost-images`,
      options: {
        // An array of node types and image fields per node
        // Image fields must contain a valid absolute path to the image to be downloaded
        lookup: [
          {
            type: `GhostPost`,
            imgTags: [`feature_image`],
          },
          {
            type: `GhostPage`,
            imgTags: [`feature_image`],
          },
          {
            type: `GhostSettings`,
            imgTags: [`cover_image`],
          },
        ],
        // Additional condition to exclude nodes
        // Takes precedence over lookup
        exclude: node => node.ghostId === undefined,
        // Additional information messages useful for debugging
        verbose: true,
        // Option to disable the module (default: false)
        disable: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#025eae`,
        theme_color: `#025eae`,
        display: `minimal-ui`,
        icon: `src/images/rounded-avatar.png`,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: 'Open Sans',
              variants: ['300', '400', '600'],
            },
            {
              family: 'Fira Code',
              variants: ['300', '400', '600'],
            },
          ],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/markdown`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-45031912-1',
        head: false,
        annoymize: true,
        respectDNT: true,
        defer: true,
      },
    },
    {
      resolve: `gatsby-source-ghost`,
      options: {
        apiUrl: `http://64.225.125.157`,
        contentApiKey: process.env.GHOST_CONTENT_API_KEY,
        version: `v3`, // Ghost API version, optional, defaults to "v3".
        // Pass in "v2" if your Ghost install is not on 3.0 yet!!!
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
