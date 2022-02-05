const path = require('path');
const get = require('lodash/get');
// eslint-disable-next-line import/no-extraneous-dependencies
const { paginate } = require('gatsby-awesome-pagination');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const featured = await graphql(`
    {
      allGhostPost(limit: 1, sort: { order: DESC, fields: created_at }) {
        edges {
          node {
            id
          }
        }
      }
    }
  `);

  const featuredId = get(featured, 'data.allGhostPost.edges[0].node.id');

  // Fetch your items (blog posts, categories, etc).
  const { data } = await graphql(
    `
      query postsQuery {
        allGhostPost(
          sort: { fields: created_at, order: DESC }
          filter: { id: { ne: "${featuredId}" } }
        ) {
          edges {
            node {
              id
            }
          }
        }
      }
    `,
  );

  const posts = get(data, 'allGhostPost.edges', []);

  // Create your paginated pages
  paginate({
    createPage, // The Gatsby `createPage` function
    items: posts, // An array of objects
    itemsPerPage: 10, // How many items you want per page
    itemsPerFirstPage: 5,
    pathPrefix: ({ pageNumber }) => (pageNumber === 0 ? '/articles' : '/articles/page'), // Creates pages like `/blog`, `/blog/2`, etc
    component: path.resolve('./src/templates/Posts.jsx'),
    context: {
      featuredId,
    },
  });
};
