import React from 'react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './components/CSS/GlobalStyles';
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <GlobalStyles>
      <App />
    </GlobalStyles>
  </React.StrictMode>
);

reportWebVitals();
