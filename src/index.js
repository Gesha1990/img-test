import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Router} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/redux-store";
import { history } from './modules/router/index'

ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
      <App/>
    </Provider>
  </Router>, document.getElementById('root'));


