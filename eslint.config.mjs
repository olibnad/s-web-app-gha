import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    files: ["*.js", "*.jsx"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: globals.browser
    },
    rules: {
      'no-console': 'off',
      'indent': ['error', 2],
      'linebreak-style': ['error', 'unix'],
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
      'arrow-parens': ['error', 'always'],
      'comma-dangle': ['error', 'never']
    }
  },
  pluginJs.configs.recommended
];
