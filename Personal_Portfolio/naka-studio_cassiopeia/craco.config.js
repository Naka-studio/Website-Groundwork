const path = require("path");

module.exports = {
	webpack: {
		configure: {
			resolve: {
				modules: [
					path.resolve(__dirname, "src"),
					"node_modules"
				]
			}
		}
	},

	style: {
		sass: {
			loaderOptions: {
				sassOptions: {
					loadPaths: [
						path.resolve(__dirname, "src")
					]
				}
			}
		}
	}
};