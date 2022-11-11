const path = require('path');

const toPath = (_path) => path.join(process.cwd(), _path);

module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: async (config) => {
    const { mode: environment, plugins, module } = config;

    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,

          /**
           * Map Emotion 10 libraries to Emotion 11 libraries.
           *
           * Otherwise Storybook fails to compile with "Module not found: Error: Can't resolve '@emotion/styled/base'", etc.
           * It wasn't necessary to do this until we imported React component using "@emotion/styled".
           * This issue is probably caused because Storybook uses Emotion 10 while we have Emotion 11 used by the Next.js app.
           *
           * @see https://github.com/storybookjs/storybook/issues/13277#issuecomment-751747964
           */
          '@emotion/core': toPath('node_modules/@emotion/react'),
          '@emotion/styled': toPath('node_modules/@emotion/styled'),
          'emotion-theming': toPath('node_modules/@emotion/react'),
          '@components': toPath('src/components'),
          '@styles': toPath('src/styles'),
          '@utils': toPath('src/utils'),
          '@pages': toPath('src/pages'),
          '@hooks': toPath('src/hooks'),
          '@public': toPath('public'),
          '@lib': toPath('src/lib'),
        },
      },
    };
  },
};
