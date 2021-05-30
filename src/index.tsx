import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StoreProvider } from './store';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
