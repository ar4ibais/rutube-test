import PrimaryButton from "../../components/PrimaryButton";
import RateCircle from "../../components/RateCircle";
import "../../styles/questions.scss";

const Questions = () => {
	return (
		<>
			<div className="container">
				<div className="questions__inner">
					<p className="questions__text">
						Пожалуйста, ответьте на дополнительные вопросы.
					</p>
					<div className="questions__item">
						<p className="questions__item-text">
							1. Как быстро вы получили ответ от клиентского
							сервиса RUTUBE?
						</p>
						<div
							style={{ flexDirection: "column" }}
							className="questions__item-flex">
							<RateCircle num={0} />
							<RateCircle num={1} />
							<RateCircle num={2} />
						</div>
					</div>
					<div className="questions__item">
						<p className="questions__item-text">
							2. Клиентский сервис RUTUBE помог в решении
							проблемы?
						</p>
						<div className="questions__item-flex">
							<RateCircle num={1} />
							<RateCircle num={2} />
							<RateCircle num={3} />
							<RateCircle num={4} />
							<RateCircle num={5} />
						</div>
					</div>
					<div className="questions__item">
						<p className="questions__item-text">
							3. Специалист RUTUBE хорошо изъяснялся и владел
							языком?
						</p>
						<div className="questions__item-flex">
							<RateCircle num={1} />
							<RateCircle num={2} />
							<RateCircle num={3} />
							<RateCircle num={4} />
							<RateCircle num={5} />
						</div>
					</div>
					<div className="questions__item">
						<p className="questions__item-text">
							4. Специалист RUTUBE был отзывчив?
						</p>
						<div className="questions__item-flex">
							<RateCircle num={1} />
							<RateCircle num={2} />
							<RateCircle num={3} />
							<RateCircle num={4} />
							<RateCircle num={5} />
						</div>
					</div>
					<div className="questions__item">
						<p className="questions__item-text">
							5. Специалист RUTUBE был компетентен?
						</p>
						<div className="questions__item-flex">
							<RateCircle num={1} />
							<RateCircle num={2} />
							<RateCircle num={3} />
							<RateCircle num={4} />
							<RateCircle num={5} />
						</div>
					</div>
					<div className="questions__item">
						<p className="questions__item-text">
							6. Какова вероятность того, что вы порекомендуете
							RUTUBE коллеге или другу?
						</p>
						<div className="questions__item-flex">
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
							<RateCircle num={10} />
						</div>
					</div>
					<PrimaryButton name="Отправить ответы" />
				</div>
			</div>
		</>
	);
};

export default Questions;
