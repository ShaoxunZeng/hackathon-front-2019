import {PureComponent} from "react";
import React from "react";
import styles from "./index.module.less";
import {NavLink} from "react-router-dom";
import WithHeaderFooter from "../../components/WithHeaderFooter";
import {Avatar, Card, Icon} from "antd";

class Allgames extends PureComponent {
  render() {
    return (
        <div className={styles.whole}>
          All games
          <Card
              style={{ width: 300 }}
              cover={
                <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
          >
            <Card.Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title="Card title"
                description="This is the description"
            />
          </Card>,
          <NavLink to="/login">
            去登陆
          </NavLink>
        </div>
    )
  };
}

export default WithHeaderFooter(Allgames);
