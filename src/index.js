import React from 'react';
import ReactDOM from 'react-dom/client';

//Components
import { App } from './components/App/app-component';

//Style
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
