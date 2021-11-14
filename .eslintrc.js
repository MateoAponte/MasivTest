module.exports = {
	root: true,
	env: {
		node: true,
	},
	parser: "vue-eslint-parser",
	parserOptions: {
		parser: require.resolve("@typescript-eslint/parser"),
		extraFileExtensions: [".vue"],
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: ["prettier", "@typescript-eslint", "vue", "prettier"],
	extends: [
		"eslint:recommended",
		"plugin:vue/recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:prettier/recommended",
		"prettier",
	],
	rules: {
		"no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
		"@typescript-eslint/explicit-module-boundary-types": "off",
		indent: [2, "tab"],
	},
};
