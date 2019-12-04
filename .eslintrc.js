module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: [
    'standard'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    semi: ['warn', 'always'],
    'node/no-deprecated-api': ['error', {
      'ignoreModuleItems': ['url.parse'],
      'ignoreGlobalItems': []
  }]
  }
}
