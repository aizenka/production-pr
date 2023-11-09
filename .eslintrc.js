module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:i18next/recommended'
  ],
  'overrides': [
    {
      'env': {
        'node': true
      },
      'files': [
        '.eslintrc.{js,cjs}'
      ],
      'parserOptions': {
        'sourceType': 'script'
      }
    }
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    '@typescript-eslint',
    'i18next'
  ],
  'rules': {
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    'comma-dangle': ['error', 'never'],
    'indent': ['error', 2],
    'object-curly-spacing': [
      'error', 'always',
      {
        'arraysInObjects': true,
        'objectsInObjects': true
      }
    ],
    // 'no-undef': 'error',
    'import/extentions': 'off',
    'react/jsx-indent': ['error', 2],
    'react/react-in-jsx-scope': 'off',
    'react/no-deprecated': 'off',
    'react/jsx-filename-extension': [2, { 'extensions': ['.js', '.jsx', '.tsx'] }],
    'react/button-has-type': 'error',
    'react/self-closing-comp': 'error',
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-props-no-spreading': 'off',
    'react/function-component-definition': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    'i18next/no-literal-string': ['error', { markupOnly: true }]
  }
}
