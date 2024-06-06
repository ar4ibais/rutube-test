import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { answerToFirstQuestion } from "../../redux/slices/root-slice";

const RateCircle = ({
	num,
	rate,
	setRate,
}: {
	num: number;
	rate: number;
	setRate: (arg1: number) => void;
}) => {
	const dispath = useDispatch();
	return (
		<Link to="/questions">
			<div
				onClick={() => {
					setRate(num);
					dispath(answerToFirstQuestion(num));
				}}
				className={`hero__rate ${rate === num && "active"}`}>
				{num}
			</div>
		</Link>
	);
};

export default RateCircle;
