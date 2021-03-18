module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true,
  },
  'extends': [
    'google',
  ],
  'parserOptions': {
    'ecmaVersion': 12,
    'sourceType': 'module',
  },
  'rules': {
    'require-jsdoc': 'off',
    'sort-imports': ['error', {
      'ignoreCase': true,
      'ignoreDeclarationSort': false,
      'ignoreMemberSort': false,
      'memberSyntaxSortOrder': ['none', 'all', 'multiple', 'single'],
    }],
    'sort-keys': ['error',
      'asc',
      {'caseSensitive': false, 'minKeys': 2, 'natural': false}],

  },
};
