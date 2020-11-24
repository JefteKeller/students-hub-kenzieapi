import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import axios from "axios";
import { Table, Typography, Button } from "antd";

const FeedbacksList = () => {
	const params = useParams();
	const history = useHistory();

	const [userFeedbacks, setUserFeedbacks] = useState([]);

	useEffect(() => {
		const token = window.localStorage.getItem("authToken");

		axios
			.get(`https://ka-users-api.herokuapp.com/users/${params.id}/feedbacks`, {
				headers: { Authorization: token },
			})
			.then(res => {
				setUserFeedbacks(res.data);
			});
	}, [params.id]);

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
			title: "Comentario",
			dataIndex: "comment",
			key: "3",
		},
		{
			title: "Grade",
			dataIndex: "grade",
			key: "4",
		},
	];

	return (
		<div>
			<Typography.Title style={{ color: "white" }}>Feedbacks</Typography.Title>
			<Table columns={columns} dataSource={userFeedbacks} />
			<div>
				<Button
					type="primary"
					onClick={() => history.push(`/users/feedbacks/${params.id}/new`)}
				>
					Novo Comentario
				</Button>
			</div>

			<Button
				style={{ marginTop: "1rem" }}
				type="default"
				onClick={() => history.push("/users")}
			>
				Voltar
			</Button>
		</div>
	);
};

export default FeedbacksList;
