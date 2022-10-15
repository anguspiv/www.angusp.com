const path = require('path');

module.exports = {
  stories: ['../src/**/*.@(stories|story).mdx', '../src/**/*.@(stories|story).@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async (config) => {
    // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
    config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/];
    // Use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
    config.module.rules[0].use[0].options.plugins.push([
      require.resolve('babel-plugin-remove-graphql-queries'),
      {
        stage: config.mode === `development` ? 'develop-html' : 'build-html',
        staticQueryDir: './page-data/sq/d',
      },
    ]);

    config.resolve.alias['@components'] = path.resolve(__dirname, '../src/components');
    config.resolve.alias['@styles'] = path.resolve(__dirname, '../src/styles');
    config.resolve.alias['@utils'] = path.resolve(__dirname, '../src/utils');

    return config;
  },
};