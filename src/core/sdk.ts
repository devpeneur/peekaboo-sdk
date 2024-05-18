interface Config {
	baseURL: string;
	timeout: number;
	analyticsEndpoint: string;
	sdkKey: string;
	wsEndpoint: string;
	onPreventionStatus: () => void;
	apiCacheTTL?: number;
	headers?: Record<string, string>;
	enableCache?: boolean;
}

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
