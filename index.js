'use strict';
module.exports = {
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		}
	},
	plugins: [
		'inferno'
	],
	rules: {
		'inferno/display-name': 'error',
		'inferno/forbid-component-props': 'error',
		'inferno/forbid-elements': 'error',
		'inferno/no-array-index-key': 'error',
		'inferno/no-children-prop': 'error',
		'inferno/no-deprecated': 'error',
		'inferno/no-did-update-set-state': 'error',
		'inferno/no-direct-mutation-state': 'error',
		'inferno/no-find-dom-node': 'error',
		'inferno/no-is-mounted': 'error',
		'inferno/no-render-return-value': 'error',
		'inferno/no-string-refs': 'error',
		'inferno/no-unescaped-entities': 'error',
		'inferno/no-unknown-property': 'error',
		'inferno/no-unused-prop-types': 'error',
		'inferno/prop-types': 'error',
		'inferno/inferno-in-jsx-scope': 'error',
		'inferno/self-closing-comp': 'error',
		'inferno/style-prop-object': 'error',
		'inferno/void-dom-elements-no-children': 'error',
		'inferno/jsx-boolean-value': 'error',
		'inferno/jsx-closing-bracket-location': ['error', 'props-aligned'],
		'inferno/jsx-curly-spacing': ['error', 'never'],
		'inferno/jsx-equals-spacing': ['error', 'never'],
		'inferno/jsx-first-prop-new-line': ['error', 'multiline'],
		'inferno/jsx-handler-names': 'error',
		'inferno/jsx-indent': ['error', 'tab'],
		'inferno/jsx-indent-props': ['error', 'tab'],
		'inferno/jsx-key': 'error',
		'inferno/jsx-max-props-per-line': ['error', {
			maximum: 1,
			when: 'multiline'
		}],
		'inferno/jsx-no-bind': 'error',
		'inferno/jsx-no-comment-textnodes': 'error',
		'inferno/jsx-no-duplicate-props': ['error', {
			ignoreCase: true
		}],
		'inferno/jsx-no-target-blank': 'error',
		'inferno/jsx-no-undef': 'error',
		'inferno/jsx-pascal-case': 'error',
		'inferno/jsx-sort-props': ['error', {
			callbacksLast: true,
			shorthandFirst: true,
			noSortAlphabetically: true
		}],
		'inferno/jsx-space-before-closing': ['error', 'never'],
		'inferno/jsx-tag-spacing': ['error', {
			closingSlash: 'never',
			beforeSelfClosing: 'never',
			afterOpening: 'never'
		}],
		'inferno/jsx-uses-inferno': 'error',
		'inferno/jsx-uses-vars': 'error',
		'inferno/jsx-wrap-multilines': 'error'
	}
};
