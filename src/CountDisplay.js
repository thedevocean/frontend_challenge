import {Fragment, useEffect} from 'react';

const CountDisplay = ({countOne, countTwo}) => {

	useEffect(() => {
		if(countTwo > 0) {
			console.log(`Count two changed: ${countTwo}`);
		}
		
	}, [countTwo])

	return (
		<Fragment>
			<div>{`Count one: ${countOne}`}</div>
			<div>{`Count two: ${countTwo}`}</div>
		</Fragment>
	)
}

export default CountDisplay;