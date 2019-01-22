module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true
  },
  globals: {
    module: true,
    require: true,
    process: true
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaFeatures: {
      arrowFunctions: true,
      binaryLiterals: true,
      blockBindings: true,
      classes: true,
      defaultParams: true,
      destructuring: true,
      forOf: true,
      generators: true,
      modules: true,
      objectLiteralComputedProperties: true,
      objectLiteralDuplicateProperties: true,
      objectLiteralShorthandMethods: true,
      objectLiteralShorthandProperties: true,
      experimentalObjectRestSpread: true,
      octalLiterals: true,
      regexUFlag: true,
      regexYFlag: true,
      spread: true,
      superInFunctions: true,
      templateStrings: true,
      unicodeCodePointEscapes: true,
      globalReturn: true,
      jsx: true
    },
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'comma-dangle': 2,
    'no-cond-assign': 2,
    'no-console': ['error', { allow: ['log', 'warn', 'error'] }],
    'no-constant-condition': 2,
    'no-control-regex': 2,
    'no-debugger': 2,
    'no-dupe-args': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty': 2,
    'no-ex-assign': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-parens': 0,
    'no-extra-semi': 2,
    'no-func-assign': 2,
    'no-inner-declarations': 2,
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 2,
    'no-negated-in-lhs': 2,
    'no-obj-calls': 2,
    'no-regex-spaces': 2,
    'no-sparse-arrays': 2,
    'no-unreachable': 2,
    'use-isnan': 2,
    'valid-jsdoc': 2,
    'valid-typeof': 2,
    'block-scoped-var': 0,
    complexity: 0,
    'consistent-return': 2,
    curly: 2,
    'default-case': 2,
    'dot-notation': 2,
    eqeqeq: 2,
    'guard-for-in': 2,
    'no-alert': 2,
    'no-caller': 2,
    'no-div-regex': 2,
    'no-else-return': 2,
    'no-eq-null': 2,
    'no-eval': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-fallthrough': 2,
    'no-floating-decimal': 2,
    'no-implied-eval': 2,
    'no-iterator': 2,
    'no-labels': 2,
    'no-lone-blocks': 2,
    'no-loop-func': 2,
    'no-multi-spaces': 2,
    'no-multi-str': 2,
    'no-native-reassign': 2,
    'no-new': 2,
    'no-new-func': 2,
    'no-new-wrappers': 2,
    'no-octal': 2,
    'no-octal-escape': 2,
    'no-param-reassign': 2,
    'no-proto': 2,
    'no-redeclare': 2,
    'no-return-assign': 2,
    'no-script-url': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-throw-literal': 2,
    'no-unused-expressions': [
      'error',
      { allowShortCircuit: true, allowTernary: true }
    ],
    'no-warning-comments': [0, { terms: ['todo', 'fixme'], location: 'start' }],
    'no-with': 2,
    radix: 2,
    'vars-on-top': 2,
    'wrap-iife': 2,
    yoda: 2,
    strict: 0,
    'no-catch-shadow': 2,
    'no-delete-var': 2,
    'no-label-var': 2,
    'no-shadow-restricted-names': 2,
    'no-undef': 2,
    'no-undef-init': 2,
    'no-undefined': 2,
    'no-unused-vars': 2,
    'no-use-before-define': 2,
    indent: ['error', 2, { SwitchCase: 1 }],
    'brace-style': 1,
    camelcase: ['error', { properties: 'never' }],
    'comma-spacing': [1, { before: false, after: true }],
    'comma-style': [1, 'last'],
    'consistent-this': [1, '_this'],
    'eol-last': 1,
    'func-names': 0,
    'func-style': 0,
    'key-spacing': [1, { beforeColon: false, afterColon: true }],
    'max-nested-callbacks': ['error', 8],
    'new-cap': [1, { newIsCap: true, capIsNew: false }],
    'new-parens': 1,
    'newline-after-var': 0,
    'no-array-constructor': 1,
    'no-lonely-if': 1,
    'no-mixed-spaces-and-tabs': 1,
    'no-multiple-empty-lines': [1, { max: 2 }],
    'no-new-object': 1,
    'no-spaced-func': 1,
    'no-ternary': 0,
    'no-trailing-spaces': 1,
    'one-var': [1, 'never'],
    'operator-assignment': [1, 'never'],
    'padded-blocks': [1, 'never'],
    'quote-props': [1, 'as-needed'],
    quotes: [1, 'single'],
    semi: [1, 'always'],
    'semi-spacing': [1, { before: false, after: true }],
    'sort-vars': 0,
    'space-before-blocks': [1, 'always'],
    'space-before-function-paren': [1, { anonymous: 'always', named: 'never' }],
    'space-in-parens': [1, 'never'],
    'space-unary-ops': [1, { words: true, nonwords: false }],
    'wrap-regex': 0,
    'no-var': 2,
    'generator-star-spacing': [2, 'before'],
    'max-depth': ['error', 6],
    'max-len': [2, 220, 2],
    'max-params': [2, 5],
    'max-statements': 0,
    'no-bitwise': 0,
    'react/display-name': 0,
    'react/jsx-no-undef': 2,
    'react/jsx-sort-props': 0,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/no-did-mount-set-state': 2,
    'react/no-did-update-set-state': 2,
    'react/no-multi-comp': 0,
    'react/no-unknown-property': 2,
    'react/prop-types': 2,
    'react/react-in-jsx-scope': 2,
    'react/self-closing-comp': 2,
    'react/jsx-wrap-multilines': 2,
    'jsx-quotes': ['error', 'prefer-double'],
    'react/jsx-boolean-value': 'error',
    'react/jsx-curly-spacing': ['error', 'never'],
    'react/jsx-equals-spacing': ['error', 'never'],
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-tag-spacing': ['error', { beforeSelfClosing: 'always' }]
  }
};
