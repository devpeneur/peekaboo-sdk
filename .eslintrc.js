module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
	  ecmaVersion: 2020,
	  sourceType: 'module',
	  ecmaFeatures: {
		jsx: true,
	  },
	},
	settings: {
	  react: {
		version: 'detect',
	  },
	},
	extends: [
	  'eslint:recommended',
	  'plugin:react/recommended',
	  'plugin:react-hooks/recommended',
	  'plugin:@typescript-eslint/recommended',
	],
	rules: {
	  'react/react-in-jsx-scope': 'off',
	  '@typescript-eslint/no-unused-vars': 'warn',
	  'react/prop-types': 'off',
	},
	ignorePatterns: ['dist', '**/*.test.ts', '**.config.*'],
  };
  