import axios, {
	AxiosInstance,
	AxiosRequestConfig,
	AxiosResponse,
	AxiosError,
	InternalAxiosRequestConfig,
} from 'axios';
import { setupCache } from 'axios-cache-adapter';
import { getConfig } from './sdk';

interface AnalyticsData {
	url: string;
	method: string;
	status: number | string;
	duration: number;
}

interface SDKConfig extends AxiosRequestConfig {
	analyticsEndpoint: string;
	cacheTTL?: number; // TTL in milliseconds
	useCache?: boolean; // Global flag to enable/disable cache
}

export const createAxiosClient = (config: SDKConfig): AxiosInstance => {
	const { apiCacheTTL, enableCache, analyticsEndpoint, sdkKey } = getConfig();
	const {
		cacheTTL = apiCacheTTL,
		useCache = enableCache,
		...axiosConfig
	} = config;

	const cache = setupCache({
		maxAge: cacheTTL,
		exclude: { query: false, methods: ['post', 'put', 'patch', 'delete'] },
	});

	const client = useCache
		? axios.create({ ...axiosConfig, adapter: cache.adapter })
		: axios.create(axiosConfig);

	const handleRequest = (
		config: InternalAxiosRequestConfig,
	): InternalAxiosRequestConfig => {
		(config as any).metadata = { startTime: new Date() };

		// Check if cache is disabled for this request
		if (config.headers['Cache-Control'] === 'no-cache') {
			config.cache = undefined;
		}

		return config;
	};

	const handleResponse = async (
		response: AxiosResponse,
	): Promise<AxiosResponse> => {
		const endTime = new Date();
		const startTime = (response.config as any).metadata.startTime;
		const duration = endTime.getTime() - startTime.getTime();

		await sendAnalytics({
			url: response.config.url || '',
			method: response.config.method || 'GET',
			status: response.status,
			duration: duration,
		});

		return response;
	};

	const handleError = async (error: AxiosError): Promise<never> => {
		if (error.config && (error.config as any).metadata) {
			const endTime = new Date();
			const startTime = (error.config as any).metadata.startTime;
			const duration = endTime.getTime() - startTime.getTime();

			await sendAnalytics({
				url: error.config.url || '',
				method: error.config.method || 'GET',
				status: error.response
					? error.response.status
					: 'Network Error',
				duration: duration,
			});
		}

		return Promise.reject(error);
	};

	const sendAnalytics = async (data: AnalyticsData): Promise<void> => {
		try {
			await axios.post(analyticsEndpoint, data, {
				headers: {
					'SDK-Key': sdkKey,
				},
			});
		} catch (error) {
			console.error('Error sending analytics data:', error);
		}
	};

	client.interceptors.request.use(handleRequest);
	client.interceptors.response.use(handleResponse, handleError);

	return client;
};
