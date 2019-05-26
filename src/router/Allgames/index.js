import {PureComponent} from "react";
import React from "react";
import styles from "./index.module.less";
import {NavLink} from "react-router-dom";
import WithHeaderFooter from "../../components/WithHeaderFooter";
import {Avatar, Card, Col, Icon, Row} from "antd";

const gamesInfos = [
  {
    id: 0,
    posterUrl: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    avatarUrl: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    title: "AI 对战五子棋",
    description: "AI 对战五子棋"
  },
  {
    id: 1,
    posterUrl: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    avatarUrl: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    title: "AI 对战五子棋",
    description: "AI 对战五子棋"
  },
  {
    id: 2,
    posterUrl: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    avatarUrl: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    title: "AI 对战五子棋",
    description: "AI 对战五子棋"
  },
  {
    id: 3,
    posterUrl: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    avatarUrl: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    title: "AI 对战五子棋",
    description: "AI 对战五子棋"
  },
  {
    id: 4,
    posterUrl: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    avatarUrl: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    title: "AI 对战五子棋",
    description: "AI 对战五子棋"
  },
  {
    id: 5,
    posterUrl: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    avatarUrl: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    title: "AI 对战五子棋",
    description: "AI 对战五子棋"
  }
];

class Allgames extends PureComponent {
  handleClick = (id) => {
    this.props.history.push(`/game/${id}/allrooms`)
  };

  render() {
    return (
        <Row gutter={16}>
          {gamesInfos.map((item) => {
            return (
                <Col span={6}>
                  <div className={styles.whole}>
                    <Card
                        style={{width: 360, margin: 20}}
                        cover={
                          <img
                              alt="example"
                              src={item.posterUrl}
                          />
                        }
                        actions={[<Icon type="enter" onClick={() => this.handleClick(item.id)}/>]}
                    >
                      <Card.Meta
                          avatar={<Avatar src={item.avatarUrl}/>}
                          title={item.title}
                          description={item.description}
                      />
                    </Card>
                  </div>
                </Col>
            )
          })}
        </Row>)
  };
}

export default WithHeaderFooter(Allgames);
