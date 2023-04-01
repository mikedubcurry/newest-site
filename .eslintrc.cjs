module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
	plugins: ['svelte3', '@typescript-eslint'],
	ignorePatterns: ['*.cjs'],
	overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
	settings: {
		'svelte3/typescript': () => require('typescript')
	},
	parserOptions: {
		sourceType: 'module',
<<<<<<< HEAD
		ecmaVersion: 2019
=======
		ecmaVersion: 2020
>>>>>>> 01e28b0 (initial commit v2)
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	}
};
