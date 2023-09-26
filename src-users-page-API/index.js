import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './app';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(<BrowserRouter><App></App></BrowserRouter>, document.getElementById('root')
);
