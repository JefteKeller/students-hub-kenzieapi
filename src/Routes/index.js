import { Switch, Route, Redirect } from "react-router-dom";

import Register from "../pages/Register";
import Login from "../pages/Login";

import UserList from "../pages/UserList";
import FeedbacksList from "../pages/FeedbacksList";
import FeedbackForm from "../pages/FeedbackForm";

const Routes = ({ isLogged, setIsLogged }) => {
	return (
		<Switch>
			<Route exact path="/">
				{isLogged ? <Redirect to="/users" /> : <Redirect to="/login" />}
			</Route>
			<Route exact path="/register">
				<Register />
			</Route>
			<Route exact path="/login">
				{isLogged ? (
					<Redirect to="/users" />
				) : (
					<Login setIsLogged={setIsLogged} />
				)}
			</Route>
			<Route exact path="/users">
				{isLogged ? <UserList /> : <Redirect to="/login" />}
			</Route>
			<Route exact path="/users/feedbacks/:id">
				{isLogged ? <FeedbacksList /> : <Redirect to="/login" />}
			</Route>
			<Route exact path="/users/feedbacks/:id/new">
				{isLogged ? <FeedbackForm /> : <Redirect to="/login" />}
			</Route>
		</Switch>
	);
};

export default Routes;
