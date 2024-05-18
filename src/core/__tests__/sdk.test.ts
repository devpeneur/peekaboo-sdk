import { Config } from "..";

describe('sdk', () => {
    let config: Config;

    beforeEach(() => {
        config = {
            baseURL: 'https://api.example.com',
            timeout: 1000,
            analyticsEndpoint: 'https://analytics.example.com',
            sdkKey: '1234',
            wsEndpoint: 'wss://ws.example.com',
            onPreventionStatus: () => { },
            apiCacheTTL: 60,
            headers: { 'X-Api-Key': '1234' },
            enableCache: true
        };
    });

    it('should have a config object', () => {
        expect(config).toBeDefined();
    });

    it('should have the correct properties in the config object', () => {
        expect(config.baseURL).toBeDefined();
        expect(config.timeout).toBeDefined();
        expect(config.analyticsEndpoint).toBeDefined();
        expect(config.sdkKey).toBeDefined();
        expect(config.wsEndpoint).toBeDefined();
        expect(config.onPreventionStatus).toBeDefined();
        expect(config.apiCacheTTL).toBeDefined();
        expect(config.headers).toBeDefined();
        expect(config.enableCache).toBeDefined();
    });
});