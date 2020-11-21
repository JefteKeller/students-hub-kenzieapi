import "./App.css";
import "antd/dist/antd.css";

// import { useState } from "react";
import Routes from "./Routes";

import TopMenu from "./components/TopMenu";

const App = () => {
	return (
		<div className="App">
			<TopMenu />

			<header className="App-header">
				<Routes />
			</header>
		</div>
	);
};

export default App;
