import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './Header';
import { Footer } from './Footer';
import Form from './Form/Form';

ReactDOM.render(
  <>
    <Header />
    <App />
    <Form />
    <Footer />
  </>,
  document.getElementById('root'),
);
