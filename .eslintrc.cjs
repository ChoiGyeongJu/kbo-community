module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:@tanstack/eslint-plugin-query/recommended',
    'plugin:storybook/recommended',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vitest.config.ts'],
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'react-refresh', '@tanstack/query', 'no-relative-import-paths'],
  rules: {
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
  },
};
