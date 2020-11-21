import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import { Table, Typography } from "antd";

const UserList = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const token = window.localStorage.getItem("authToken");

		axios
			.get("https://ka-users-api.herokuapp.com/users", {
				headers: { Authorization: token },
			})
			.then(res => {
				setUsers(res.data);
			});
	}, []);
	console.log(users);

	const columns = [
		{
			title: "Id",
			dataIndex: "id",
			key: "1",
		},
		{
			title: "Nome",
			dataIndex: "name",
			key: "2",
		},
		{
			title: "Usuario",
			dataIndex: "user",
			key: "3",
		},
		{
			title: "Email",
			dataIndex: "email",
			key: "4",
		},
		{
			title: "Feedbacks",
			render: record => {
				return (
					<Link to={`/users/feedbacks/${record.id}`}>Go to Feedbacks</Link>
				);
			},
		},
	];

	return (
		<div>
			<Typography.Title>Alunos</Typography.Title>
			<Table columns={columns} dataSource={users} />
		</div>
	);
};

export default UserList;
