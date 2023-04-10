import React, { useContext } from 'react';

//Context
import { CounterContext } from '../../providers/CounterProvider';

//Style
import './buttons-styles.scss';

export const Buttons = () => {
	const { setCounter } = useContext(CounterContext);

	const decrementCount = () => setCounter(prev => prev - 1);
	const incrementCount = () => setCounter(prev => prev + 1);

	return (
		<div className='buttons'>
			<button onClick={decrementCount}>
				<span>-</span>
				Мінус
			</button>
			<button onClick={incrementCount}>
				Плюс
				<span>+</span>
			</button>
		</div>
	);
};
