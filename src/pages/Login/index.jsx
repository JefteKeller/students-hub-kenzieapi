import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Login = ({ setIsLogged }) => {
	const schema = yup.object().shape({
		user: yup
			.string()
			.min(6, "Mínimo de 6 dígitos")
			.required("Campo obrigatório"),
		password: yup
			.string()
			.min(6, "Mínimo de 6 dígitos")
			.matches(/(^(?=.*?[#?!@$%^&*-]).{6,}$)/gm)
			.required("Campo obrigatório"),
	});

	const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(schema),
	});

	const [loginMessage, setLoginMessage] = useState("");
	const history = useHistory();

	const handleForm = data => {
		axios
			.post("https://ka-users-api.herokuapp.com/authenticate", { ...data })
			.then(res => {
				window.localStorage.setItem("authToken", res.data.auth_token);
				setIsLogged(true);
				history.push("/users");
			})
			.catch(err => {
				setLoginMessage(err.response.data.error.user_authentication);
			});
	};

	return (
		<div className="formContainer">
			<form
				onSubmit={handleSubmit(handleForm, err =>
					setLoginMessage(err.password.message)
				)}
			>
				<Input placeholder="Usuario" name="user" ref={register} width="80%" />
				<p style={{ color: "red" }}>{errors.user?.message}</p>

				<Input
					type="password"
					placeholder="Senha"
					name="password"
					ref={register}
					width="80%"
				/>
				<p style={{ color: "red" }}>{errors.password?.message}</p>

				<Button type="submit" bgColor="#0f1cce" width="80%">
					Enviar
				</Button>
			</form>
			{loginMessage && <p style={{ color: "red" }}>{loginMessage}</p>}
		</div>
	);
};

export default Login;
