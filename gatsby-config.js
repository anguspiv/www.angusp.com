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
      resolve: `gatsby-source-ghost`,
      options: {
        apiUrl: process.env.GHOST_API_URL,
        contentApiKey: process.env.GHOST_CONTENT_API_KEY,
        version: `v3`, // Ghost API version, optional, defaults to "v3".
        // Pass in "v2" if your Ghost install is not on 3.0 yet!!!
      },
    },
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
    /**
     * This plugin generates a service worker and AppShell
     * html file so the site works offline and is otherwise
     * resistant to bad networks. Works with almost any
     * site!
     * https://www.gatsbyjs.org/packages/gatsby-plugin-offline/
     * https://www.gatsbyjs.org/packages/gatsby-plugin-appshell/
     * https://www.gatsbyjs.org/packages/gatsby-plugin-manifest/
     *  */
    {
      resolve: `gatsby-plugin-ghost-manifest`,
      options: {
        short_name: config.shortTitle,
        start_url: `/`,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: `minimal-ui`,
        legacy: true,
        icon: config.siteIcon,
        query: `
        {
            allGhostSettings {
                edges {
                    node {
                        title
                        description
                    }
                }
            }
        }
      `,
      },
    },
    {
      resolve: `gatsby-plugin-advanced-sitemap`,
      options: {
        query: `
          {
              allGhostPost {
                  edges {
                      node {
                          id
                          slug
                          updated_at
                          created_at
                          feature_image
                      }
                  }
              }
              allGhostPage {
                  edges {
                      node {
                          id
                          slug
                          updated_at
                          created_at
                          feature_image
                      }
                  }
              }
              allGhostTag {
                  edges {
                      node {
                          id
                          slug
                          feature_image
                      }
                  }
              }
              allGhostAuthor {
                  edges {
                      node {
                          id
                          slug
                          profile_image
                      }
                  }
              }
          }`,
        mapping: {
          allGhostPost: {
            sitemap: `posts`,
          },
          allGhostTag: {
            sitemap: `tags`,
          },
          allGhostAuthor: {
            sitemap: `authors`,
          },
          allGhostPage: {
            sitemap: ``,
          },
        },
        exclude: [`/dev-404-page`, `/404`, `/404.html`, `/offline-plugin-app-shell-fallback`],
        createLinkInHead: true,
        addUncaughtPages: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-force-trailing-slashes`,
  ],
};
