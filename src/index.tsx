import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from "../src/context/userContext"
import { CartProvider } from './context/cartContext';
import { ThemeProvider } from './context/themeContext';
import { stripePromise } from './utils/stripeProv';
import { Elements } from '@stripe/react-stripe-js';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(  

  <BrowserRouter>
    <ThemeProvider>
      <UserProvider>
        <CartProvider>
          <Elements stripe={stripePromise}>
            <App />
          </Elements>
        </CartProvider>
      </UserProvider>
    </ThemeProvider>
  </BrowserRouter>

);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
