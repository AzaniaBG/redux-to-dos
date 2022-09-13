import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
/* << import ReactDOM  to insert React element into the Dom */
import App from './App';

import './index.css';

/* call ReactDOM.render to put React on the page using root DOM node */
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>, 
    document.getElementById('root')
);
