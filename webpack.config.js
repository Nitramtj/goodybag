module.exports = {
	entry: "./src/goodybag.js",
	output: {
		path: './dist',
		filename: 'goodybag.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel'
			}
		]
	}
};