import logo from "../../assets/logo.svg";

import "./header.scss";

const Header = () => {
	return (
		<header className="header">
			<div className="container">
				<img src={logo} alt="logo" />
			</div>
		</header>
	);
};

export default Header;
