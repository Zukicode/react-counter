import React from 'react';

//Components
import { Result } from '../Result/result-component';
import { Buttons } from '../Buttons';

//Style
import './app-styles.scss';

//Provider
import { CounterProvider } from '../../providers/CounterProvider';

export const App = () => {
	return (
		<CounterProvider>
			<div className='app-content'>
				<Result />
				<Buttons />
			</div>
		</CounterProvider>
	);
};
