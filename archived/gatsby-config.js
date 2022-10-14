const path = require('path');
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
// const generateRSSFeed = require(`./src/utils/rss/generate-feed`);
const config = require('./src/utils/config');

let url = config.siteUrl;

if (process.env.CONTEXT === 'deploy-preview' && process.env.DEPLOY_PRIME_URL) {
  url = process.env.DEPLOY_PRIME_URL;
}

if (process.env.CONTEXT === 'production' && process.env.URL) {
  url = process.env.URL;
}

module.exports = {
  siteMetadata: {
    siteUrl: url,
    email: config.email,
    profileImage: config.profileImage,
  },
  plugins: [
    /**
     * Gatsby's data processing layer begins with "source"
     */
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@components': path.resolve(__dirname, 'src/components'),
          '@styles': path.resolve(__dirname, 'src/styles'),
          '@utils': path.resolve(__dirname, 'src/utils'),
        },
        extensions: [],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/markdown`,
      },
    },
    `gatsby-transformer-remark`,
    /**
     * Build Plugins
     */
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
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
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-45031912-1',
        head: false,
        anonymize: true,
        respectDNT: true,
        defer: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-force-trailing-slashes`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          'G-8WWWZ3XLTZ', // Google Analytics / GA
          'UA-45031912-1',
          // 'GA-TRACKING_ID', // Google Analytics / GA
          // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          // "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: 'GTM-KVCS6WB',
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          // exclude: ['/preview/**', '/do-not-track/me/too/'],
        },
      },
    },
  ],
};
