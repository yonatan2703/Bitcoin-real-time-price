import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import { ChakraProvider, Box } from "@chakra-ui/react";
import useWebSocket from "./hooks/useWebSocket";
import {
	subscribeMessage,
	unSubscribeMessage,
	webSocketURL,
} from "./API/socketAPI";
import Header from "./components/Header.jsx";
import TabsMenu from "./components/TabsMenu";

function App() {
	const [ws, message, unSubscribe] = useWebSocket(
		subscribeMessage,
		unSubscribeMessage,
		webSocketURL
	);

	const [tabIndex, setTabIndex] = useState(0);

	let navigate = useNavigate();
	let location = useLocation();

	useEffect(() => {
		if (location?.pathname === "/history") setTabIndex(1);
		else navigate("/overview");
	}, []);

	return (
		<ChakraProvider>
			<Box className="App" p="12">
				<Header data={message}></Header>
				<TabsMenu
					tabIndex={tabIndex}
					setTabIndex={setTabIndex}
				></TabsMenu>
			</Box>
		</ChakraProvider>
	);
}

export default App;
