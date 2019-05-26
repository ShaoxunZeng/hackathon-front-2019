import {PureComponent} from "react";
import React from "react";
import styles from "./index.module.less";
import {NavLink} from "react-router-dom";
import WithHeaderFooter from "../../components/WithHeaderFooter";
import {Avatar, Card, Col, Icon, Row} from "antd";
import {getAllGames} from "../../services/apiHTTP";

const gamesInfos = Array(5).fill("AI 对战五子棋")
// {
//   id: 0,
//   posterUrl: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
//   avatarUrl: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
//   title: "AI 对战五子棋",
//   description: "AI 对战五子棋"
// },
// {
//   id: 1,
//   posterUrl: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
//   avatarUrl: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
//   title: "AI 对战五子棋",
//   description: "AI 对战五子棋"
// },
// {
//   id: 2,
//   posterUrl: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
//   avatarUrl: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
//   title: "AI 对战五子棋",
//   description: "AI 对战五子棋"
// },
// {
//   id: 3,
//   posterUrl: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
//   avatarUrl: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
//   title: "AI 对战五子棋",
//   description: "AI 对战五子棋"
// },
// {
//   id: 4,
//   posterUrl: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
//   avatarUrl: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
//   title: "AI 对战五子棋",
//   description: "AI 对战五子棋"
// },
// {
//   id: 5,
//   posterUrl: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
//   avatarUrl: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
//   title: "AI 对战五子棋",
//   description: "AI 对战五子棋"
// }
// ]
;

class Allgames extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            gamesInfos:gamesInfos
        }

    }

    componentWillMount() {
        getAllGames().then(res=>{
            this.setState({
                gamesInfos:res.data
            })
        })
    }

    handleClick = (gameName) => {
        this.props.history.push(`/game/${gameName}/allrooms`)
    };
    avatarUrl;

    render() {
        return (
            <Row gutter={16}>
                {gamesInfos.map((item) => {
                    return (
                        <Col span={8}>
                            <div className={styles.whole}>
                                <Card
                                    style={{width: 360, margin: 20}}
                                    cover={
                                        <img
                                            alt="example"
                                            src='https://cdn.nlark.com/yuque/0/2019/png/248245/1558873338221-f29b560c-b606-4fd9-9476-3b173c0c4430.png'
                                        />
                                    }
                                    actions={[<Icon type="enter" onClick={() => this.handleClick(item)}/>]}
                                >
                                    <Card.Meta
                                        title={item}
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
