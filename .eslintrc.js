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
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react',
    'simple-import-sort',
    'sort-keys-custom-order-fix',
    'unused-imports'
  ],
  rules: {
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
