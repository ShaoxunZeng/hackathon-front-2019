import {PureComponent} from "react";
import React from "react";
import styles from "./index.module.less";
import {NavLink} from "react-router-dom";

class Home extends PureComponent {
  render() {
    return (
        <div className={styles.whole}>
          Home
          <NavLink to="/login">
              去登陆
          </NavLink>
        </div>
    )
  };
}

export default Home;
