import { useLocation, useHistory } from "react-router-dom";
import { Menu } from "antd";

const TopMenu = () => {
	const history = useHistory();
	const location = useLocation();

	return (
		<Menu selectedKeys={[location.pathname]} mode="horizontal">
			<Menu.Item key="/register" onClick={() => history.push("/register")}>
				Novo Usuário
			</Menu.Item>
			<Menu.Item key="/login" onClick={() => history.push("/login")}>
				Login
			</Menu.Item>
		</Menu>
	);
};

export default TopMenu;
