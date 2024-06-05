import ThanksImage from "../../assets/thanks-image.png";
import PrimaryButton from "../../components/PrimaryButton";
import Title from "../../components/Title";

const Thanks = () => {
	return (
		<>
			<div className="container">
				<div className="container-mn">
					<img
						className="thansk__image"
						src={ThanksImage}
						alt="image"
					/>
					<Title title="Спасибо за обратную связь!" />
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
