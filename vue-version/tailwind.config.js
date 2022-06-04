module.exports = {
	// * prefix for your tailwind classes
	prefix: 'tw-',

	// * If you used any other css framework than uncomment this

	// corePlugins: {
	// 	preflight: false,
	// },

	content: [
		"./index.html",
		"./src/**/*.{vue,js,ts,jsx,tsx}",
	],
	theme: {
		extend: {},
	},
	plugins: [],
};
