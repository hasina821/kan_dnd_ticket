import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import AppRouter from "./router/index"
import "./index.css"
import store from "./store/store"
import {Provider} from "react-redux"


ReactDOM.render(
  <React.StrictMode>
        <Provider store={store}>
          <AppRouter />
        </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
