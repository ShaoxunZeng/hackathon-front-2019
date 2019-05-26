import React from "react";
import {Route} from "react-router-dom"

import Login from "../Login";
import Home from "../Home";


export default [
  <Route component={Login} exact path='/login'/>,
  <Route component={Home} path='/'/>
];
