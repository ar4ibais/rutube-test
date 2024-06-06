import { useSelector } from "react-redux";
import ThanksImage from "../../assets/thanks-image.png";
import PrimaryButton from "../../components/PrimaryButton";
import Title from "../../components/Title";
import { RootState } from "../../redux/store";
import { Link } from "react-router-dom";

const Thanks = () => {
	// const navigate = useNavigate();
	const state = useSelector((state: RootState) => state.RootReducer);
	const questionsState = useSelector(
		(state: RootState) => state.RootReducer.questions
	);
	if (questionsState.length === 6) {
		console.log(state);
	}

	// useEffect(() => {
	// 	if (questionsState.length === 6 && state.firstQuestion !== -1) {
	// 		navigate("/redirect");
	// 	}
	// }, []);
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
					{questionsState.length === 6 ? (
						<Link to="/redirect">
							<PrimaryButton name="Перейти на платформу" />
						</Link>
					) : (
						<Link to="/">
							<PrimaryButton name="Перейти на платформу" />
						</Link>
					)}
				</div>
			</div>
		</>
	);
};

export default Thanks;
