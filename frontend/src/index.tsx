import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { AuthProvider } from './provider/AuthProvider';
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from './Menu';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App/>
    </AuthProvider>
  </React.StrictMode>,
 document.getElementById('root')
);