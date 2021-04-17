module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier', 'prettier/react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'warn',
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
    'import/prefer-default-export': 'off',
    "jsx-a11y/img-redundant-alt": [2, {
      "components": ["Image"],
      "words": ["Bild", "Foto"],
    }],
    'no-console': 'off',
    'no-alert': 'off',
    "radix": 'off',
    eqeqeq: ["off", "smart"],
    "react/prop-types": "off",
    "react/jsx-props-no-spreading": "off",
    "class-methods-use-this": "off",
    "import/no-named-as-default": 0,
    "no-param-reassign": "off"
  },

};
