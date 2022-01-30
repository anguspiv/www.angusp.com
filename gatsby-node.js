/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`);

exports.createPages = async ({ actions, graphql, reporter }) => {
  const pageTemplate = path.resolve(`src/templates/page.jsx`);

  const pageResults = await graphql(`
    {
      allGhostPage(filter: { slug: { ne: "home" } }) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  if (pageResults.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query for ghost pages.`);
    return;
  }

  if (!pageResults.data.allGhostPage) {
    reporter.panicOnBuild(`No Ghost pages`);
    return;
  }

  const pages = pageResults.data.allGhostPage.edges;

  pages.forEach(({ node }) => {
    const url = node.slug === 'index' ? '/' : node.slug;

    actions.createPage({
      path: url,
      component: pageTemplate,
      context: {},
    });
  });
};
