import {PureComponent} from "react";
import React from "react";
import styles from "./index.module.less";
import {NavLink} from "react-router-dom";
import WithHeaderFooter from "../../components/WithHeaderFooter";

class Allrooms extends PureComponent {
  render() {
    const {id} = this.props.match.params;
    return (
        <div className={styles.whole}>
          {id}的所有房间
          <NavLink to="/allgames">
            所有游戏
          </NavLink>
        </div>
    )
  };
}

export default WithHeaderFooter(Allrooms);
