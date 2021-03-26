const CountButton = ({countOneButtonClick, countTwoButtonClick}) => (
	<div>
		<button onClick={countOneButtonClick}>Count one increment</button>
		<button onClick={countTwoButtonClick}>Count two increment</button>
	</div>
)

export default CountButton;