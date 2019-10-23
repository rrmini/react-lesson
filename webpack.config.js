const webpack = require('webpack');

module.exports = {
		entry: {
				app: './index.jsx',
		},
		watch: process.argv[process.argv.length - 1] === 'development',
		watchOptions: {
				aggregateTimeout: 100
		},
		context: `${__dirname}/static_src`,
		output: {
				path: `${__dirname}/static/build`,
				filename: 'app.js',
				},
		module: {
				rules: [
						{
								test: /\.(js|jsx)$/,
								include: `${__dirname}/static_src`,
								loader: 'babel-loader',
								exclude: /node_modules/,
								query: {
										presets: ['@babel/env', '@babel/react'],
										plugins: [
												[
														"@babel/plugin-proposal-class-properties",
														{
																"loose": true
														}
												]
										]
								}
						}
				]
		},
		resolve: {
				modules: [`${__dirname}/static_src`, 'node_modules'],
				extensions: ['.js', '.jsx'],
		},
};
