import React, { useContext } from 'react';

//Context
import { CounterContext } from '../../providers/CounterProvider';

//Style
import './result-styles.scss';

export const Result = () => {
	const { counter } = useContext(CounterContext);

	return (
		<div className='result'>
			<p>Лічильник:</p>
			<h1>{counter}</h1>
		</div>
	);
};
