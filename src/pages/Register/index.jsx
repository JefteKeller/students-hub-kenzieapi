import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import { FormContainer } from "../../components/FormContainer";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Register = () => {
	const schema = yup.object().shape({
		user: yup
			.string()
			.min(6, "Mínimo de 6 dígitos")
			.required("Campo obrigatório"),
		name: yup
			.string()
			.matches(/^(.[a-zÀ-ÿ].+\s).+$/i)
			.required("Campo obrigatório"),
		email: yup.string().email("Email inválido").required("Campo obrigatório"),
		password: yup
			.string()
			.min(6, "Mínimo de 6 dígitos e 1 caractere especial")
			.matches(/(^(?=.*?[#?!@$%^&*-]).{6,}$)/gm)
			.required("Campo obrigatório"),
		password_confirmation: yup
			.string()
			.oneOf([yup.ref("password")], "Senhas não conferem")
			.required("Campo obrigatório"),
	});

	const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(schema),
	});

	const [registerMessage, setRegisterMessage] = useState("");
	const history = useHistory();

	const handleForm = data => {
		axios
			.post("https://ka-users-api.herokuapp.com/users", { user: { ...data } })
			.then(res => {
				setRegisterMessage("Usuario criado com Sucesso!");
				history.push("/login");
			})
			.catch(() =>
				setRegisterMessage(
					"Ocorreu um erro, revise os Dados e tente novamente."
				)
			);
	};

	return (
		<FormContainer>
			<form onSubmit={handleSubmit(handleForm)}>
				<Input
					type="text"
					placeholder="Usuário"
					name="user"
					ref={register}
					width="100%"
				/>
				<p style={{ color: "red" }}>{errors.user?.message}</p>

				<Input
					type="text"
					placeholder="Nome Completo"
					name="name"
					ref={register}
					width="100%"
				/>
				<p style={{ color: "red" }}>{errors.name?.message}</p>

				<Input
					type="text"
					placeholder="Email "
					name="email"
					ref={register}
					width="100%"
				/>
				<p style={{ color: "red" }}>{errors.email?.message}</p>

				<Input
					type="password"
					placeholder="Senha"
					name="password"
					ref={register}
					width="100%"
				/>
				<p style={{ color: "red" }}>{errors.password?.message}</p>

				<Input
					type="password"
					placeholder="Confirmar Senha"
					name="password_confirmation"
					ref={register}
					width="100%"
				/>
				<p style={{ color: "red" }}>{errors.password_confirmation?.message}</p>

				<Button type="submit" bgColor="#0f1cce" width="80%">
					Enviar
				</Button>
			</form>
			{registerMessage && <p style={{ color: "white" }}>{registerMessage}</p>}
		</FormContainer>
	);
};

export default Register;
