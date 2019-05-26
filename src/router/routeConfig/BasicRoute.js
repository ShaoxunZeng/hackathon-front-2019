import React from "react";
import {Route} from "react-router-dom";

import Login from "../Login";
import Allgames from "../Allgames";
import Allrooms from "../Allrooms";
import Onplay from "../Onplay";


export default [
  <Route component={Allgames} exact path='/allgames'/>,
  <Route component={Allrooms} exact path='/game/:gamename/allrooms'/>,
  <Route component={Onplay} exact path='/room/:roomid'/>,
  <Route component={Login} path='/'/>,
];
