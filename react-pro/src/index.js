import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//引入style
import './styleSheets/main.scss';
 
import "./modules/testpost"

import './modules/axios-utils' 

import "./modules/rem"  //引入rem比例

import {Provider} from "react-redux"

import store from "./store"


import { HashRouter as Router} from "react-router-dom" // 引入路由
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>   
    </Provider>
        ,document.getElementById('root'));
