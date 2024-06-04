import ThanksImage from "../../assets/thanks-image.png";
import Header from "../../components/Header";
import PrimaryButton from "../../components/PrimaryButton";

const Thanks = () => {
	return (
		<>
			<Header />
			<div className="container">
				<div className="container-mn">
					<img
						className="thansk__image"
						src={ThanksImage}
						alt="image"
					/>
					<h1 className="hero__title">Спасибо за обратную связь!</h1>
					<p className="hero__text">
						Это поможет нам улучшить сервис
					</p>
					<PrimaryButton name="Перейти на платформу" />
				</div>
			</div>
		</>
	);
};

export default Thanks;
