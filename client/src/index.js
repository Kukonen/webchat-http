import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import store from "./Store/Store";

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
);
