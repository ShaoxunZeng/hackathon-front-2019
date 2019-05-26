import React from "react";
import {Route} from "react-router-dom";

import Login from "../Login";
import Home from "../Home";
import Allgames from "../Allgames";
import Allrooms from "../Allrooms";
import Onplay from "../Onplay";


export default [
  <Route component={Login} exact path='/login'/>,
  <Route component={Allgames} exact path='/allgames'/>,
  <Route component={Allrooms} exact path='/game/:id/allrooms'/>,
  <Route component={Onplay} exact path='/room/:id'/>,
  <Route component={Home} path='/'/>
];
