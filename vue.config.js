module.exports = {
	publicPath: process.env.NODE_ENV === "production" ? "./" : "http://localhost:8080/",
	outputDir: process.env.NODE_ENV === "production" ? "./dist" : "./dist",
	assetsDir: process.env.NODE_ENV === "production" ? "./" : "./",

	chainWebpack: (config) => {
		config.devServer
			.public("http://localhost:8080")
			.host("localhost")
			.port(8080)
			.hotOnly(false)
			.watchOptions({
				poll: 1000,
			})
			.https(false)
			.headers({
				"Access-Control-Allow-Origin": ["*"],
			})
			.proxy("http://localhost:8080/js");
	},
};
