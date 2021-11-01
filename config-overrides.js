var path = require('path');

module.exports = function override(config, env) {
	// TODO comment when using package from npm
	config.resolve = {
		alias: {
			'react': 'C:/Users/PavelVlach/WebstormProjects/ptr-maps/node_modules/react',
			'@gisatcz/ptr-maps': 'C:/Users/PavelVlach/WebstormProjects/ptr-maps',
		},
	};

	return config;
};
