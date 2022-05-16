import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from '@material-ui/core/styles';
// import theme from "./theme";
import App from "./App";



const rootElement = document.getElementById("root");
ReactDOM.render(

    <React.StrictMode>
       
            <App />
       
    </React.StrictMode>




    , rootElement);
