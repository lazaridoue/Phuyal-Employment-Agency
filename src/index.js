import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import theme from "./theme";
import { ThemeProvider } from '@material-ui/core/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router><App /></Router>
    </ThemeProvider>
  </React.StrictMode>,
  rootElement
);

