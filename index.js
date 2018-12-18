module.exports = {
  extends: [
    'standard',
    'plugin:vue/recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  rules: {
    'max-len': 'off',
    'indent': 'off'
  },
  overrides: [
    {
      files: '**/*.vue"',
      rules: {
        'vue/component-name-in-template-casing': ['error', 'kebab-case'],
        'vue/script-indent': ['error', 2, {
          'baseIndent': 1,
          'switchCase': 1,
          'ignores': []
        }],
        'vue/max-attributes-per-line': ['error', {
          'singleline': 1,
          'multiline': {
            'max': 1,
            'allowFirstLine': false
          }
        }],
        'vue/html-closing-bracket-newline': ['error', {
          'singleline': 'never',
          'multiline': 'always'
        }],
        'vue/html-closing-bracket-spacing': 'error',
        'vue/no-v-html': 'off'
      }
    }
  ]
}