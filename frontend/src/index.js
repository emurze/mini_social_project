import store from "./redux/store";
import ReactDOM from "react-dom/client";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import {Provider} from "react-redux";
import './reset.css'
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    // <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    // </React.StrictMode>
)

reportWebVitals()