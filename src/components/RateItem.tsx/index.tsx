interface RateItemProps {
	qnum: string;
	qans: number;
	onClick: (qnum: string, qans: number) => void;
	isActive: boolean;
	className?: string;
}

const RateItem: React.FC<RateItemProps> = ({
	qnum,
	qans,
	onClick,
	isActive,
	className,
}) => {
	const handleClick = () => {
		onClick(qnum, qans);
	};

	return (
		<div
			data-qnum={qnum}
			data-qans={qans}
			className={`${className ? "questions__rate" : "hero__rate"} ${
				isActive ? "active" : ""
			}`}
			onClick={handleClick}>
			{qans}
		</div>
	);
};

export default RateItem;
