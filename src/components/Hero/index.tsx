import { useEffect, useState } from "react";
import HeroImage from "../../assets/hero-image.png";
import RateCircle from "../RateCircle";
import Title from "../Title";

import "./hero.scss";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

const Hero = () => {
	const state = useSelector((state: RootState) => state.RootReducer);
	const questionsState = useSelector(
		(state: RootState) => state.RootReducer.questions
	);
	const [rate, setRate] = useState<number>(-1);
	const navigate = useNavigate();

	useEffect(() => {
		if (questionsState.length === 6 && state.firstQuestion !== -1) {
			navigate("/redirect");
		} else if (questionsState.length !== 6 && state.firstQuestion !== -1) {
			navigate("/questions");
		}
	}, []);
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
						<RateCircle rate={rate} setRate={setRate} num={0} />
						<RateCircle rate={rate} setRate={setRate} num={1} />
						<RateCircle rate={rate} setRate={setRate} num={2} />
						<RateCircle rate={rate} setRate={setRate} num={3} />
						<RateCircle rate={rate} setRate={setRate} num={4} />
						<RateCircle rate={rate} setRate={setRate} num={5} />
						<RateCircle rate={rate} setRate={setRate} num={6} />
						<RateCircle rate={rate} setRate={setRate} num={7} />
						<RateCircle rate={rate} setRate={setRate} num={8} />
						<RateCircle rate={rate} setRate={setRate} num={9} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
