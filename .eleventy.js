// const pluginRss = require('@11ty/eleventy-plugin-rss');



module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("src/css");
	eleventyConfig.addPassthroughCopy("src/images");
	return {
		dir: {
			input: 'src',
			includes: '_includes',
			data: '_data',
			output: 'docs',
		},
	};
};