import {PureComponent} from "react";
import React from "react";
import styles from "./index.module.less";
import {NavLink} from "react-router-dom";

class Allgames extends PureComponent {
  render() {
    return (
        <div className={styles.whole}>
          All games
          <NavLink to="/login">
            去登陆
          </NavLink>
        </div>
    )
  };
}

export default Allgames;
