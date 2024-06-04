import HeroImage from "../../assets/hero-image.png";

import "./hero.scss";

const Hero = () => {
	return (
		<div className="hero">
			<div className="container">
				<div className="hero__content">
					<img className="hero__image" src={HeroImage} alt="" />
					<h1 className="hero__title">Уважаемый клиент!</h1>
					<p className="hero__text">
						Запрос закрыт. Пожалуйста, оцените качество
						предоставленного сервиса по данному обращению, используя
						шкалу от 0 до 9, где 0 является «Хуже некуда» и 9 —
						«Отлично».
					</p>
					<div className="hero__rating">
						<div className="hero__rate">0</div>
						<div className="hero__rate">1</div>
						<div className="hero__rate">2</div>
						<div className="hero__rate">3</div>
						<div className="hero__rate">4</div>
						<div className="hero__rate">5</div>
						<div className="hero__rate">6</div>
						<div className="hero__rate">7</div>
						<div className="hero__rate">8</div>
						<div className="hero__rate">9</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
