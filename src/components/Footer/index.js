import React, {Component} from "react";
import {NavLink, withRouter} from "react-router-dom";
import styles from './index.module.less';
import UserAvatar from '../Avatar';

class Header extends Component {
  render() {
    return (
        <div className={styles.whole}>
          <div className={styles.content}>
            <div className={styles.text}>
              All rights reserved @nju
            </div>
          </div>
        </div>
    )
  }
}

export default withRouter(Header);
