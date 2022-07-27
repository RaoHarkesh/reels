import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
// switch ka kaam ye h ki jisse match kre usi k pass jaye.....agar ham switch use na kre to url me jo bhi ijclude h
// usko bhi dikha dega for eg khali /feed me feed bhi h and khali / bhi h to dono show honge but latest me 
// ab ye problem nhi h
root.render(
  <BrowserRouter>
    <App />
    </BrowserRouter>
   
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
