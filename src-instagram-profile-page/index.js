import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(<BrowserRouter><App></App></BrowserRouter>, document.getElementById("root"));