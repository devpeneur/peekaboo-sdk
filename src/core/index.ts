import { AxiosInstance } from 'axios';
import { createAxiosClient } from './axiosWrapper';
import { initializeSDK, getConfig } from './sdk';
import {
	initializeWebSocketClient,
	closeWebSocketClient,
} from './listner';

interface Config {
	baseURL: string;
	timeout: number;
	analyticsEndpoint: string;
	sdkKey: string;
	wsEndpoint: string;
	onPreventionStatus: () => void;
	enableCache?: boolean;
	apiCacheTTL?: number;
	headers?: Record<string, string>;
}

export const initialize = (config: Config): void => {
	initializeSDK(config);
	initializeWebSocketClient(config);
};

export const getClient = (): AxiosInstance => {
	const config = getConfig();
	return createAxiosClient(config);
};

export const close = (): void => {
	closeWebSocketClient();
};
