import RedirectImage from "../../assets/redirect-image.png";
import Header from "../../components/Header";
import PrimaryButton from "../../components/PrimaryButton";

const Redirect = () => {
	return (
		<>
			<Header />
			<div className="container">
				<div className="container-mn">
					<img
						className="thansk__image"
						src={RedirectImage}
						alt="image"
					/>
					<h1 className="hero__title">Спасибо за обратную связь!</h1>
					<p className="hero__text">
						Это поможет нам улучшить сервис
					</p>
					<PrimaryButton name="Перейти на RUTUBE" />
				</div>
			</div>
		</>
	);
};

export default Redirect;
