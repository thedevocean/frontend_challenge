import {Fragment, useEffect} from 'react';

const CountDisplay = ({countOne, countTwo, onCountTwoChange}) => {


	useEffect(() => {
		if(countTwo > 0) {
			console.log(`Count two changed: ${countTwo}`);
			onCountTwoChange(countTwo)
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [countTwo]);

	return (
		<Fragment>
			<div>{`Count one: ${countOne}`}</div>
			<div>{`Count two: ${countTwo}`}</div>
		</Fragment>
	)
}

export default CountDisplay;