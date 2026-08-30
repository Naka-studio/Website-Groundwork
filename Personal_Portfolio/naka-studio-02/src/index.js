import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Main from 'bootstrap/App';
import 'styles/config.scss';
import reportWebVitals from 'utils/reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
		<BrowserRouter>  
    	<Main />
		</BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
