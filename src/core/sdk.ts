import { Config } from '.';

let config: Config;

export const initializeSDK = (initialConfig: Config): void => {
	config = initialConfig;
};

export const getConfig = (): Config => {
	if (!config) {
		throw new Error('SDK not initialized');
	}
	return config;
};
