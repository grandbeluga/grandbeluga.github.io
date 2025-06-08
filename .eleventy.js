const pluginRss = require('@11ty/eleventy-plugin-rss');

module.exports = function (eleventyConfig) {
	eleventyConfig.addPlugin(pluginRss);
	eleventyConfig.addPassthroughCopy("src/css");
	eleventyConfig.addPassthroughCopy("src/images");
	eleventyConfig.addPassthroughCopy({ 'src/js/bundle.js': 'js/bundle.js' });
	return {
		dir: {
			input: 'src',
			includes: '_includes',
			data: '_data',
			output: 'docs',
		},
	};
};