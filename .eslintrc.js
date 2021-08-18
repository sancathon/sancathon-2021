module.exports = {
  env: {
    browser: true,
    es2020: true,
    jest: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended'
  ],
  ignorePatterns: ['src/components/organisms/TradingView/'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'simple-import-sort',
    'sort-keys-custom-order-fix',
    'unused-imports'
  ],
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'no-useless-escape': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    'sort-keys-custom-order-fix/sort-keys-custom-order-fix': [
      'error',
      'custom',
      {
        caseSensitive: true,
        order: [
          '_id',
          'id',
          'userId',
          'username',
          'followerUserId',
          'followedUserId',
          'exchangeId',
          'symbolId',
          'method',
          'headers',
          'base',
          'sm',
          'md',
          'lg',
          'xl',
          '2xl',
          'localhost',
          'stg',
          'prd',
          'staging',
          'production'
        ],
        orderBy: 'asc'
      }
    ],
    'unused-imports/no-unused-imports-ts': 'error'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
