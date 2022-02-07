const path = require('path');
const get = require('lodash/get');
// eslint-disable-next-line import/no-extraneous-dependencies
const { paginate } = require('gatsby-awesome-pagination');

const createTagPages = async (graphql, { createPage }) => {
  const { data } = await graphql(`
    {
      allGhostTag(filter: { visibility: { eq: "public" } }, sort: { fields: name, order: ASC }) {
        edges {
          node {
            slug
            id
          }
        }
      }
    }
  `);

  const tags = get(data, 'allGhostTag.edges', []);

  const tagPages = tags.map(({ node }) => {
    const { slug, id } = node;

    const promise = graphql(`
      query postsQuery {
        allGhostPost(
          sort: { fields: created_at, order: DESC }
          filter: { tags: { elemMatch: { id: { eq: "${id}" } } } }
        ) {
          edges {
            node {
              id
            }
          }
        }
      }
    `).then((query) => {
      const posts = get(query, 'data.allGhostPost.edges', []);

      paginate({
        createPage, // The Gatsby `createPage` function
        items: posts, // An array of objects
        itemsPerPage: 10, // How many items you want per page
        itemsPerFirstPage: 5,
        pathPrefix: ({ pageNumber }) => (pageNumber === 0 ? `/tags/${slug}` : `/tags/${slug}/page`), // Creates pages like `/blog`, `/blog/2`, etc
        component: path.resolve('./src/templates/TagPosts.jsx'),
        context: {
          tagId: id,
        },
      });
    });

    return promise;
  });

  return Promise.all(tagPages);
};

const createPostPages = async (graphql, actions) => {
  const { createPage } = actions;

  // Create Article Pagination
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

exports.createPages = async ({ actions, graphql }) => {
  await createPostPages(graphql, actions);
  await createTagPages(graphql, actions);
};
