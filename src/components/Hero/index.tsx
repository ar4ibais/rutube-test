import HeroImage from "../../assets/hero-image.png";
import RateCircle from "../RateCircle";
import Title from "../Title";

import "./hero.scss";

const Hero = () => {
	return (
		<div className="hero">
			<div className="container">
				<div className="container-mn">
					<img className="hero__image" src={HeroImage} alt="" />
					<Title title="Уважаемый клиент!" />
					<p className="hero__text">
						Запрос закрыт. Пожалуйста, оцените качество
						предоставленного сервиса по данному обращению, используя
						шкалу от 0 до 9, где 0 является «Хуже некуда» и 9 —
						«Отлично».
					</p>
					<div className="hero__rating">
						<RateCircle num={0} />
						<RateCircle num={1} />
						<RateCircle num={2} />
						<RateCircle num={3} />
						<RateCircle num={4} />
						<RateCircle num={5} />
						<RateCircle num={6} />
						<RateCircle num={7} />
						<RateCircle num={8} />
						<RateCircle num={9} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
