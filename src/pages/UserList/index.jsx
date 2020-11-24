import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Table, Typography } from "antd";

const UserList = () => {
	const [users, setUsers] = useState([]);
	const token = window.localStorage.getItem("authToken");

	useEffect(() => {
		axios
			.get("https://ka-users-api.herokuapp.com/users", {
				headers: { Authorization: token },
			})
			.then(res => {
				setUsers(res.data);
			});
	}, [token]);

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
		<div className="antdTable">
			<Typography.Title style={{ color: "white" }}>Alunos</Typography.Title>
			<Table
				rowKey={record => record.id}
				columns={columns}
				dataSource={users}
			/>
		</div>
	);
};

export default UserList;
