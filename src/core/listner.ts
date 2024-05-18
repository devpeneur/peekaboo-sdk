interface Config {
	wsEndpoint: string;
	sdkKey: string;
	onPreventionStatus: () => void;
}

let socket: WebSocket | null = null;

export const initializeWebSocketClient = (config: Config): void => {
	socket = new WebSocket(config.wsEndpoint);

	socket.onopen = () => {
		console.log('WebSocket connection established');
		// Optionally, you can send a message to the server identifying the client
		socket?.send(JSON.stringify({ sdkKey: config.sdkKey }));
	};

	socket.onmessage = (event) => {
		const message = JSON.parse(event.data);

		if (message.status === 'prevention') {
			config.onPreventionStatus();
		}
	};

	socket.onclose = () => {
		console.log('WebSocket connection closed');
	};

	socket.onerror = (error) => {
		console.error('WebSocket error:', error);
	};
};

export const closeWebSocketClient = (): void => {
	if (socket) {
		socket.close();
		socket = null;
	}
};
