import React from 'react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './components/GlobalStyles';
import { createRoot } from 'react-dom/client';
import ErrorBoundary from './errors';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
    <GlobalStyles>
      <App />
    </GlobalStyles>
    </ErrorBoundary>
  </React.StrictMode>
);

reportWebVitals();
