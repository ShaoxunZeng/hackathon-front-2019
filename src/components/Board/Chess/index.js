import {PureComponent} from "react";
import React from "react";
import styles from "./index.module.less";
import {NavLink} from "react-router-dom";

class Chess extends PureComponent {
  render() {
    const {type} = this.props;
    const classNames = `${styles["whole"]} ${styles[`whole-${type}`]}`;
    return (
        <div className={classNames}>

        </div>
    )
  };
}

export default Chess;
