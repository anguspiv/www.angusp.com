/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`);

exports.createPages = async ({ actions, graphql, reporter }) => {
  const pageTemplate = path.resolve(`src/templates/page.jsx`);
  const postTemplate = path.resolve(`src/templates/post.jsx`);

  // Query Ghost data
  const postResults = await graphql(`
    {
      allGhostPost(sort: { order: ASC, fields: published_at }) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  const pageResults = await graphql(`
    {
      allGhostPage {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  // Handle errors
  if (postResults.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  if (pageResults.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query for ghost pages.`);
    return;
  }

  if (!pageResults.data.allGhostPage) {
    reporter.panicOnBuild(`No Ghost pages`);
    return;
  }

  // Create pages for each Ghost post
  const posts = postResults.data.allGhostPost.edges;

  const pages = pageResults.data.allGhostPage.edges;

  pages.forEach(({ node }) => {
    const url = node.slug === 'index' ? '/' : node.slug;

    actions.createPage({
      path: url,
      component: pageTemplate,
      context: {},
    });
  });

  posts.forEach(({ node }) => {
    const url = `/posts/${node.slug}/`;
    actions.createPage({
      path: url,
      component: postTemplate,
      context: {
        slug: node.slug,
      },
    });
  });
};
