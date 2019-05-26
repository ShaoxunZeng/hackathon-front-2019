import React, { Component } from "react";
import styles from './index.module.less';
import PropTypes from "prop-types";
import {Avatar , Badge} from "antd";
import { NavLink, withRouter } from "react-router-dom";

const UserAvatarProps = {
  /** Define src of avatar */
  src: PropTypes.string.isRequired,
};

class UserAvatar extends Component {
    render() {
      const { src } = this.props;
        return (
            <div className={styles.whole}>
              <NavLink to={"/"}>
                <Badge count={4} style={{ backgroundColor: '#8BC34A', color: '#ffffff' }}>
                  <Avatar shape='circle' src={src} className={styles.avatar} size={42}/>
                </Badge>
              </NavLink>
            </div>
        )
    }
}

UserAvatar.propTypes = UserAvatarProps;

export default withRouter(UserAvatar);
