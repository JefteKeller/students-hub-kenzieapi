import { Switch, Route, Redirect } from "react-router-dom";

import Register from "../pages/Register";
import Login from "../pages/Login";
import UserList from "../pages/UserList";
import FeedbacksList from "../pages/FeedbacksList";
import FeedbackForm from "../pages/FeedbackForm";

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/">
				{window.localStorage.getItem("authToken") ? (
					<Redirect to="/users" />
				) : (
					<Redirect to="/login" />
				)}
			</Route>
			<Route exact path="/register">
				<Register />
			</Route>
			<Route exact path="/login">
				<Login />
			</Route>
			<Route exact path="/users">
				<UserList />
			</Route>
			<Route exact path="/users/feedbacks/:id">
				<FeedbacksList />
			</Route>
			<Route exact path="/users/feedbacks/:id/new">
				<FeedbackForm />
			</Route>
		</Switch>
	);
};

export default Routes;
