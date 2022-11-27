import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import App from '../src/components/App';
import { BrowserRouter } from 'react-router-dom';


import {AuthContextProvider} from './store/auth-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<AuthContextProvider>
  <BrowserRouter>
   <App />
  </BrowserRouter>
  </AuthContextProvider>
);
reportWebVitals();
