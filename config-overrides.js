var path = require('path');

module.exports = function override(config, env) {
	// TODO comment when using package from npm
	config.resolve = {
		alias: {
			// 'vlach-test-package': "C:/Users/pvlach/DATA/vlach-test-package",
		},
	};

	return config;
};
