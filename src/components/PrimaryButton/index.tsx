import "./primary-button.scss";

type Props = {
	name: string;
};

const PrimaryButton = ({ name }: Props) => {
	return <button className="primary-btn">{name}</button>;
};

export default PrimaryButton;
