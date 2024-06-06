import { useDispatch, useSelector } from "react-redux";
import PrimaryButton from "../../components/PrimaryButton";
import "../../styles/questions.scss";
import { answerToQuestion } from "../../redux/slices/root-slice";
import RateItem from "../../components/RateItem.tsx";
import { useEffect, useState } from "react";
import { RootState } from "../../redux/store.ts";
import { Link, useNavigate } from "react-router-dom";

const Questions = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const state = useSelector((state: RootState) => state.RootReducer);
	const questionsState = useSelector(
		(state: RootState) => state.RootReducer.questions
	);

	// Состояние для отслеживания активных ответов
	const [activeAnswers, setActiveAnswers] = useState<{
		[key: string]: number;
	}>({});

	const handleRateClick = (qnum: string, qans: number) => {
		dispatch(
			answerToQuestion({
				questionID: qnum,
				responseID: qans,
			})
		);
		setActiveAnswers((prevState) => ({
			...prevState,
			[qnum]: qans,
		}));
	};

	useEffect(() => {
		// Инициализировать активные ответы из состояния
		const initialActiveAnswers: { [key: string]: number } = {};
		questionsState.forEach((question) => {
			initialActiveAnswers[question.questionID] = question.responseID;
		});
		setActiveAnswers(initialActiveAnswers);
	}, [questionsState]);

	useEffect(() => {
		if (questionsState.length === 6 && state.firstQuestion !== -1) {
			navigate("/redirect");
		}
	}, []);
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
							{[1, 2, 3].map((ans) => (
								<RateItem
									key={ans}
									qnum="1"
									qans={ans}
									onClick={handleRateClick}
									className="questions__rate"
									isActive={activeAnswers["1"] === ans}
								/>
							))}
						</div>
					</div>

					<div className="questions__item">
						<p className="questions__item-text">
							2. Клиентский сервис RUTUBE помог в решении
							проблемы?
						</p>
						<div className="questions__item-flex">
							{[1, 2, 3, 4, 5].map((ans) => (
								<RateItem
									key={ans}
									qnum="2"
									qans={ans}
									onClick={handleRateClick}
									isActive={activeAnswers["2"] === ans}
								/>
							))}
						</div>
					</div>

					<div className="questions__item">
						<p className="questions__item-text">
							3. Специалист RUTUBE хорошо изъяснялся и владел
							языком?
						</p>
						<div className="questions__item-flex">
							{[1, 2, 3, 4, 5].map((ans) => (
								<RateItem
									key={ans}
									qnum="3"
									qans={ans}
									onClick={handleRateClick}
									isActive={activeAnswers["3"] === ans}
								/>
							))}
						</div>
					</div>

					<div className="questions__item">
						<p className="questions__item-text">
							4. Специалист RUTUBE был отзывчив?
						</p>
						<div className="questions__item-flex">
							{[1, 2, 3, 4, 5].map((ans) => (
								<RateItem
									key={ans}
									qnum="4"
									qans={ans}
									onClick={handleRateClick}
									isActive={activeAnswers["4"] === ans}
								/>
							))}
						</div>
					</div>

					<div className="questions__item">
						<p className="questions__item-text">
							5. Специалист RUTUBE был компетентен?
						</p>
						<div className="questions__item-flex">
							{[1, 2, 3, 4, 5].map((ans) => (
								<RateItem
									key={ans}
									qnum="5"
									qans={ans}
									onClick={handleRateClick}
									isActive={activeAnswers["5"] === ans}
								/>
							))}
						</div>
					</div>

					<div className="questions__item">
						<p className="questions__item-text">
							6. Какова вероятность того, что вы порекомендуете
							RUTUBE коллеге или другу?
						</p>
						<div className="questions__item-flex">
							{[...Array(11).keys()].map((ans) => (
								<RateItem
									key={ans}
									qnum="6"
									qans={ans}
									onClick={handleRateClick}
									isActive={activeAnswers["6"] === ans}
								/>
							))}
						</div>
					</div>
					{questionsState.length === 6 ? (
						<Link to="/thanks">
							<PrimaryButton name="Отправить ответы" />
						</Link>
					) : (
						<PrimaryButton name="Отправить ответы" />
					)}
				</div>
			</div>
		</>
	);
};

export default Questions;
