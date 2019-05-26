import { PureComponent } from "react";
import React from "react";
import styles from "./index.module.less";
import {NavLink} from "react-router-dom";

class Login extends PureComponent {
  render() {
    return (
        <div className={styles.whole}>
          Login
          <NavLink to='/'> 去主页 </NavLink>
        </div>
    )
  };
}

export default Login;
