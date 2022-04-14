module.exports = {
  extends: [
    'next',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  settings: {
    next: {
      rootDir: ['apps/*/', 'packages/*/'],
    },
  },
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'react/jsx-key': 'off',
    'no-unused-vars': 'error',
    'no-console': ['error', { allow: ['warn', 'error', 'debug', 'info'] }],
  },
  overrides: [
    {
      files: ['**/next.config.js'],
      rules: { '@typescript-eslint/no-var-requires': 'off' },
    },
  ],
}
