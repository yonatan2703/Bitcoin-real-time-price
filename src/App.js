import React, { useState, useEffect } from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import useWebSocket from "./hooks/useWebSocket";
import {
	subscribeMessage,
	unSubscribeMessage,
	webSocketURL,
} from "./API/socketAPI";

function App() {
	const [ws, message, unSubscribe] = useWebSocket(
		subscribeMessage,
		unSubscribeMessage,
		webSocketURL
	);

	return (
		<ChakraProvider>
			<div className="App">
				<header className="App-header"></header>
			</div>
		</ChakraProvider>
	);
}

export default App;
