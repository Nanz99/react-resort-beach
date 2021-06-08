import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { RoomsProvider } from './Context';

ReactDOM.render(
  <RoomsProvider>
     <App />
  </RoomsProvider> ,
  document.getElementById('root')
);


