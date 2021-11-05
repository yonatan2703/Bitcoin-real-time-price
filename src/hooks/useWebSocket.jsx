import React, { useState, useEffect } from "react";

const useWebSocket = (subscribeMessage, unSubscribeMessage, webSocketURL) => {
	const [ws, setWs] = useState(null);
	const [message, setMessage] = useState(null);

	useEffect(() => {
		const wsClient = new WebSocket(webSocketURL);
		wsClient.onopen = () => {
			console.log("ws opened");
			wsClient.send(JSON.stringify(subscribeMessage));
			setWs(wsClient);
		};
		wsClient.onclose = () => console.log("ws closed");

		return () => {
			wsClient.close();
		};
	}, []);

	useEffect(() => {
		if (!ws) return;

		ws.onmessage = (e) => {
			const msgData = JSON.parse(e.data);
			setMessage(msgData["cc-btc-usd-cccagg"]);
			console.log(msgData["cc-btc-usd-cccagg"]);
		};
	}, [ws]);

	const unSubsribe = () => {
		ws.send(JSON.stringify(unSubscribeMessage));
	};

	return [ws, message, unSubsribe];
};

export default useWebSocket;
