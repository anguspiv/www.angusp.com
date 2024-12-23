export default {
  '**/*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  '**/*.{json,md,mdx,yml}': ['prettier --write'],
};
