import React, { useState, useEffect } from "react";
import "./App.css";
import { ChakraProvider, Box } from "@chakra-ui/react";
import useWebSocket from "./hooks/useWebSocket";
import {
	subscribeMessage,
	unSubscribeMessage,
	webSocketURL,
} from "./API/socketAPI";
import Header from "./components/Header.jsx";

function App() {
	const [ws, message, unSubscribe] = useWebSocket(
		subscribeMessage,
		unSubscribeMessage,
		webSocketURL
	);

	return (
		<ChakraProvider>
			<Box className="App" p="12">
				<Header data={message}></Header>
			</Box>
		</ChakraProvider>
	);
}

export default App;
