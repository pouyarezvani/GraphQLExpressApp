module.exports = {
	'env': {
		'browser': true,
		'es2021' : true,
		'node'   : true
	},
	'extends': [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended'
	],
	'parser'       : '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 13,
		'sourceType' : 'module'
	},
	'plugins': [
		'@typescript-eslint'
	],
	'rules': {
		'key-spacing'                                      : [ 'warn', { align: 'colon' } ],
		'no-unused-vars'                                   : 'off',
		'object-curly-spacing'                             : [ 'warn', 'always' ],
		'array-bracket-spacing'                            : [ 'warn', 'always' ],
		'prefer-const'                                     : 'off',
		'no-trailing-spaces'                               : [ 'warn', { skipBlankLines: true } ],
		'no-mixed-spaces-and-tabs'                         : [ 'warn', 'smart-tabs' ],
		'quotes'                                           : [ 'warn', 'single' ],
		'jsx-quotes'                                       : [ 'warn', 'prefer-single' ],
		'comma-dangle'                                     : [ 'warn', 'never' ],
		'space-in-parens'                                  : [ 'warn', 'always' ],
		'no-extra-parens'                                  : [ 'warn', 'all' ],
		'@typescript-eslint/no-unused-vars'                : [ 'off' ],
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/object-curly-spacing'          : [ 'warn', 'always' ],
		'@typescript-eslint/no-explicit-any'               : 'off',
		'@typescript-eslint/ban-ts-comment'                : 'off',
		'@typescript-eslint/no-non-null-assertion'         : 'off',
		'@typescript-eslint/no-namespace'                  : 'off',
		'@typescript-eslint/no-empty-interface'            : 'off',
		'@typescript-eslint/no-var-requires'               : 'off',
		'react/prop-types'                                 : [ 'off', { skipUndeclared: true } ],
		'react/no-unescaped-entities'                      : 'off',
		'react/display-name'                               : 'off',
		'no-empty'                                         : [ 'warn', { 'allowEmptyCatch': true } ]
	}
};
