import './styles/index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import configureStore from './store/configureStore';
import routes from './routes';

const store = configureStore();


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                {routes}
            </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root')
);
