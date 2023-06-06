import ErrorBoundary from '@components/errorBoundary/ErrorBoundary';
import Router from '@components/router/Router';
import { store } from '@store/index';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <ErrorBoundary>
                <Router />
            </ErrorBoundary>
        </BrowserRouter>
    </Provider>,
);

reportWebVitals();
