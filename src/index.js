import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from './application/store';
import services from './infrastructure/services';
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
    <React.StrictMode>
        <Provider store={configureStore(services)}>
            <App />
        </Provider>
    </React.StrictMode>
);