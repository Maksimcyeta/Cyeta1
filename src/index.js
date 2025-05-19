import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
import './resource/css/index.css';
import App from './App';
import {HashRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <HashRouter>
            <App/>
        </HashRouter>
    </React.StrictMode>
=======
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
>>>>>>> c43333e2778157f1e0441ae18d98e9604fa96989
);
