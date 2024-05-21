import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  {
    languageOptions: {
      globals: {
        ...globals.node,
        process: 'readonly',
      },
    },
    ignores: ['**/node_modules/', '.dist/'],
    rules: {
      'no-unused-vars': 'error',
      'no-console': 'warn',
      'prefer-const': 'error',
      'no-unused-expressions': 'error',
      'no-undef': 'error',
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
