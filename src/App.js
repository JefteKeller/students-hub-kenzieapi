import "./App.css";
import "antd/dist/antd.css";

import axios from "axios";
import { useState, useEffect } from "react";

import Routes from "./Routes";
import TopMenu from "./components/TopMenu";

const App = () => {
	const [isLogged, setIsLogged] = useState(null);

	const token = window.localStorage.getItem("authToken");

	useEffect(() => {
		axios
			.get("https://ka-users-api.herokuapp.com/users", {
				headers: { Authorization: token },
			})
			.then(res => {
				if (res.status === 200) {
					setIsLogged(true);
				} else {
					setIsLogged(false);
				}
			})
			.catch(() => {
				setIsLogged(false);
			});
	}, [token]);

	return (
		<div className="App">
			<TopMenu isLogged={isLogged} setIsLogged={setIsLogged} />

			<header className="App-header">
				<Routes isLogged={isLogged} setIsLogged={setIsLogged} />
			</header>
		</div>
	);
};

export default App;
