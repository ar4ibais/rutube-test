import { Link } from "react-router-dom";
import RedirectImage from "../../assets/redirect-image.png";
import PrimaryButton from "../../components/PrimaryButton";
import Title from "../../components/Title";

const Redirect = () => {
	return (
		<>
			<div className="container">
				<div className="container-mn">
					<img
						className="thansk__image"
						src={RedirectImage}
						alt="image"
					/>
					<Title title="Вы уже прошли этот опрос" />
					<p className="hero__text">
						Спасибо, что делитесь мнением и помогаете нам быть лучше
					</p>
					<Link to="https://rutube.ru/" target="_blank">
						<PrimaryButton name="Перейти на RUTUBE" />
					</Link>
				</div>
			</div>
		</>
	);
};

export default Redirect;
