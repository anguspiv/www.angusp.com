module.exports = {
  extends: ['next/core-web-vitals', 'airbnb', 'airbnb/hooks', 'prettier'],
  plugins: ['prettier', '@emotion'],
  rules: {
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
      },
    ],
    '@emotion/pkg-renaming': 'error',
    '@emotion/styled-import': 'error',
    '@emotion/no-vanilla': 'error',
  },
  overrides: [
    {
      env: {
        jest: true,
      },
      files: ['**/*.test.js?(x)', './__tests__/**/*.js?(x)'],
      plugins: ['jest', 'testing-library', 'jest-dom'],
      extends: ['plugin:testing-library/react', 'plugin:jest-dom/recommended', 'plugin:jest/all'],
    },
    {
      files: ['**/*.cy.js?(x)', './cypress/**/*.js?(x)', './cypress.config.js'],
      plugins: ['cypress'],
      extends: ['plugin:cypress/recommended'],
      env: {
        'cypress/globals': true,
      },
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
    {
      files: ['**/*.stories.js?(x)'],
      extends: ['plugin:storybook/recommended'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
        'react/function-component-definition': 'off',
        'react/jsx-props-no-spreading': 'off',
        'import/prefer-default-export': 'off',
      },
    },
  ],
  settings: {
    'import/resolver': {
      jsconfig: {
        config: 'jsconfig.json',
        extensions: ['.js', '.jsx'],
      },
    },
  },
};
