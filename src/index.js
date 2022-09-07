import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import {BrowserRouter} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={ store }>
    <BrowserRouter>
    <PersistGate persistor={persistor}>
      <React.StrictMode>  
        <App />
      </React.StrictMode>
    </PersistGate>
    </BrowserRouter>
  </Provider>
);
