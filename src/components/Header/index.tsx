import logo from "../../assets/logo.svg";

import "./header.scss";

const Header = () => {
	return (
		<header className="header">
			<div className="container">
				<a href="/">
					<img src={logo} alt="logo" />
				</a>
			</div>
		</header>
	);
};

export default Header;
