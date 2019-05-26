import React from "react";
import {Route} from "react-router-dom";

import Login from "../Login";
import Home from "../Home";
import Allgames from "../Allgames";


export default [
  <Route component={Login} exact path='/login'/>,
  <Route component={Allgames} exact path='/allgames'/>,
  < Route component={Home} path='/'/>
];
