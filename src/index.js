import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import GlobalProvider from "./contexts/GlobalContext";

ReactDOM.render(
    <React.StrictMode>
        <GlobalProvider>
            <App />
        </GlobalProvider>
    </React.StrictMode>,
    document.getElementById("root")
);

serviceWorker.unregister();
