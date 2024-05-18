import { Config } from "..";

describe('Config', () => {
    it('should have the required properties', () => {
        const config: Config = {
            baseURL: 'https://example.com',
            timeout: 5000,
            analyticsEndpoint: '/analytics',
            sdkKey: 'abc123',
            wsEndpoint: 'wss://example.com/ws',
            onPreventionStatus: jest.fn(),
        };

        expect(config.baseURL).toBeDefined();
        expect(config.timeout).toBeDefined();
        expect(config.analyticsEndpoint).toBeDefined();
        expect(config.sdkKey).toBeDefined();
        expect(config.wsEndpoint).toBeDefined();
        expect(config.onPreventionStatus).toBeDefined();
    });

    it('should allow optional properties', () => {
        const config: Config = {
            baseURL: 'https://example.com',
            timeout: 5000,
            analyticsEndpoint: '/analytics',
            sdkKey: 'abc123',
            wsEndpoint: 'wss://example.com/ws',
            onPreventionStatus: jest.fn(),
            enableCache: true,
            apiCacheTTL: 3600,
            headers: { 'Content-Type': 'application/json' },
        };

        expect(config.enableCache).toBeDefined();
        expect(config.apiCacheTTL).toBeDefined();
        expect(config.headers).toBeDefined();
    });
});