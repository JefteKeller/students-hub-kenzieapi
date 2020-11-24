import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const FeedbackForm = () => {
	const params = useParams();
	const history = useHistory();

	const schema = yup.object().shape({
		name: yup
			.string()
			.min(2, "Mínimo de 2 letras")
			.required("Campo obrigatório"),
		comment: yup
			.string()
			.min(2, "Mínimo de 2 letras")
			.required("Campo obrigatório"),
		grade: yup
			.number()
			.max(10)
			.positive()
			.integer()
			.required("Campo obrigatório"),
	});

	const { register, handleSubmit } = useForm({
		resolver: yupResolver(schema),
	});

	const handleForm = data => {
		const token = window.localStorage.getItem("authToken");

		axios
			.post(
				`https://ka-users-api.herokuapp.com/users/${params.id}/feedbacks`,
				{ feedback: { ...data } },
				{ headers: { Authorization: token } }
			)
			.then(() => history.push(`/users/feedbacks/${params.id}`));
	};

	return (
		<div className="formContainer">
			<form onSubmit={handleSubmit(handleForm)}>
				<Input
					placeholder="Nome"
					name="name"
					ref={register}
					width="80%"
					margin="0.3rem"
				/>
				<Input
					placeholder="Comentario"
					name="comment"
					ref={register}
					width="80%"
					margin="0.3rem"
				/>
				<Input
					type="number"
					placeholder="Nota"
					name="grade"
					ref={register}
					width="80%"
					margin="0.3rem"
				/>
				<Button type="submit" bgColor="#0f1cce" width="70%">
					Enviar
				</Button>
			</form>

			<Button onClick={() => history.push(`/users/feedbacks/${params.id}`)}>
				Voltar
			</Button>
		</div>
	);
};

export default FeedbackForm;
