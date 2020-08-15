const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const path = require("path");
const rules = require("./rules");

const dev = process.env.NODE_ENV !== "production";

module.exports = {
	entry: "./client/index.js",
	optimization: {
		minimize: true,
		minimizer: [new TerserPlugin()],
	},
	output: {
		filename: "bundle.js",
		path: path.resolve(process.cwd(), "public"),
	},
	module: {
		rules,
	},
	plugins: [
		new ProgressBarPlugin(),
		new MiniCssExtractPlugin({
			filename: "style.css",
		}),
	],
	mode: dev ? "development" : "production",
	watch: dev,
	performance: {
		hints: dev ? false : "warning",
	},
};
