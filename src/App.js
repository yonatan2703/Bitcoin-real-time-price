import "./App.css";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
	return (
		<ChakraProvider>
			<div className="App">
				<header className="App-header"></header>
			</div>
		</ChakraProvider>
	);
}

export default App;
