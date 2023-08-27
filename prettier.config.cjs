// prettier.config.js, .prettierrc.js, prettier.config.cjs, or .prettierrc.cjs

/** @type {import('prettier').Options} */
module.exports = {
    trailingComma: "all",
    tabWidth: 4,
    semi: true,
    singleQuote: true,
	printWidth: 150,
	proseWrap: 'never',
	overrides: [
		{
			files: ['**/*.css', '**/*.scss', '**/*.html'],
			options: {
				singleQuote: false,
			},
		},
	],
};

