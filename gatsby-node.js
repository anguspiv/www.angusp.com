/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`);

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const pageTemplate = path.resolve(`src/templates/page.jsx`);
  const postTemplate = path.resolve(`src/templates/post.jsx`);

  const result = await graphql(`
    {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

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

  // Handle errors
  if (postResults.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  if (!postResults.data.allGhostPost) {
    reporter.panicOnBuild(`No Ghost posts`);
    return;
  }

  // Create pages for each Ghost post
  const posts = postResults.data.allGhostPost.edges;

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

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: pageTemplate,
      context: {}, // additional data can be passed via context
    });
  });

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const url = `/${node.slug}/`;
    actions.createPage({
      path: url,
      component: postTemplate,
      context: {
        slug: node.slug,
      },
    });
  });
};
