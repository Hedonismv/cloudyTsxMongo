import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {store} from "./reducers";
import {Provider} from "react-redux";
import {DefaultGlobalStyle} from "./styledComponent/globalStyles";
import {ThemeProvider} from "styled-components";
import {myTheme} from "./styledComponent/themes/defaultTheme";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={myTheme}>
                <DefaultGlobalStyle/>
                <App/>
            </ThemeProvider>
        </Provider>
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
