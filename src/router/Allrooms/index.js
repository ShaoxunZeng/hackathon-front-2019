import {PureComponent} from "react";
import React from "react";
import styles from "./index.module.less";
import {NavLink} from "react-router-dom";
import WithHeaderFooter from "../../components/WithHeaderFooter";
import {Card, Row, Col, Icon, Button} from 'antd'

const {Meta}=Card;

const gameInfo = {
    gameName: 'AI 对战五子棋',
    gameIntro: '五子棋是世界智力运动会竞技项目之一，是一种两人对弈的纯策略型棋类游戏，是世界智力运动会竞技项目之一，通常双方分别使用黑白两色的棋子，下在棋盘直线与横线的交叉点上，先形成5子连线者获胜。' +
        '棋具与围棋通用，起源于中国上古时代的传统黑白棋种之一。主要流行于华人和汉字文化圈的国家以及欧美一些地区，是世界上最古老的棋。' +
        '容易上手，老少皆宜，而且趣味横生，引人入胜；不仅能增强思维能力，提高智力，而且富含哲理，有助于修身养性。已在各个游戏平台有应用。',
    gamePic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558867508883&di=919f63312153b88041b4df1a11887a9f&imgtype=0&src=http%3A%2F%2Fwww.qbaobei.com%2FUploads%2FEditor%2F2015-11-02%2F5636de2320c09.jpg'
};
const roomInfos = [
    {roomId: 1, currentCount: 0, maxCount: 2},
    {roomId: 2, currentCount: 1, maxCount: 2},
    {roomId: 3, currentCount: 0, maxCount: 2},
    {roomId: 4, currentCount: 2, maxCount: 2},
    {roomId: 5, currentCount: 0, maxCount: 2},
    {roomId: 6, currentCount: 1, maxCount: 2},
    {roomId: 7, currentCount: 0, maxCount: 2},
    {roomId: 8, currentCount: 2, maxCount: 2},

];

class Allrooms extends PureComponent {


    constructor(props) {
        super(props)

        this.state = {
            gameInfo: {
                gameName: '',
                gameIntro: '',
                gamePic: ''
            },
            roomInfos: []
        }

    }


    componentWillMount() {
        //todo() 调用获取游戏信息接口 调用获取房间信息接口
        this.setState({
            gameInfo: gameInfo,
            roomInfos: roomInfos
        })
    }

    handleClick = (roomId) => {
        //todo() 进入房间比赛
        console.log(roomId)
    };

    render() {
        const {id} = this.props.match.params;
        const PandaSvg = () => (
            <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
                <path
                    d="M99.096 315.634s-82.58-64.032-82.58-132.13c0-66.064 33.032-165.162 148.646-148.646 83.37 11.91 99.096 165.162 99.096 165.162l-165.162 115.614zM924.906 315.634s82.58-64.032 82.58-132.13c0-66.064-33.032-165.162-148.646-148.646-83.37 11.91-99.096 165.162-99.096 165.162l165.162 115.614z"
                    fill="#6B676E"
                    p-id="1143"
                />
                <path
                    d="M1024 561.548c0 264.526-229.23 429.42-512.002 429.42S0 826.076 0 561.548 283.96 66.064 512.002 66.064 1024 297.022 1024 561.548z"
                    fill="#FFEBD2"
                    p-id="1144"
                />
                <path
                    d="M330.324 842.126c0 82.096 81.34 148.646 181.678 148.646s181.678-66.55 181.678-148.646H330.324z"
                    fill="#E9D7C3"
                    p-id="1145"
                />
                <path
                    d="M644.13 611.098C594.582 528.516 561.55 512 512.002 512c-49.548 0-82.58 16.516-132.13 99.096-42.488 70.814-78.73 211.264-49.548 247.742 66.064 82.58 165.162 33.032 181.678 33.032 16.516 0 115.614 49.548 181.678-33.032 29.18-36.476-7.064-176.93-49.55-247.74z"
                    fill="#FFFFFF"
                    p-id="1146"
                />
                <path
                    d="M611.098 495.484c0-45.608 36.974-82.58 82.58-82.58 49.548 0 198.194 99.098 198.194 165.162s-79.934 144.904-148.646 99.096c-49.548-33.032-132.128-148.646-132.128-181.678zM412.904 495.484c0-45.608-36.974-82.58-82.58-82.58-49.548 0-198.194 99.098-198.194 165.162s79.934 144.904 148.646 99.096c49.548-33.032 132.128-148.646 132.128-181.678z"
                    fill="#6B676E"
                    p-id="1147"
                />
                <path
                    d="M512.002 726.622c-30.06 0-115.614 5.668-115.614 33.032 0 49.638 105.484 85.24 115.614 82.58 10.128 2.66 115.614-32.944 115.614-82.58-0.002-27.366-85.556-33.032-115.614-33.032z"
                    fill="#464655"
                    p-id="1148"
                />
                <path
                    d="M330.324 495.484m-33.032 0a33.032 33.032 0 1 0 66.064 0 33.032 33.032 0 1 0-66.064 0Z"
                    fill="#464655"
                    p-id="1149"
                />
                <path
                    d="M693.678 495.484m-33.032 0a33.032 33.032 0 1 0 66.064 0 33.032 33.032 0 1 0-66.064 0Z"
                    fill="#464655"
                    p-id="1150"
                />
            </svg>
        );
        const PandaIcon = props => <Icon component={PandaSvg} {...props} />;


        return (

            <div className={styles.whole}>
                {/*{id}的所有房间*/}
                {/*<NavLink to="/allgames">*/}
                {/*所有游戏*/}
                {/*</NavLink>*/}
                <Card title={gameInfo.gameName} className={styles.wholeCard}
                      headStyle={{fontSize: 25}}
                >
                    <Card type="inner" title="对战方法介绍"
                          headStyle={{
                              backgroundImage: "linear-gradient(15deg, rgba(19, 84, 122, 0.72) 0%, rgba(128, 208, 199, 0.56) 100%)",
                              color: "white"
                          }}
                    >
                        <Row gutter={8}>
                            <Col span={18}>
                                <div className={styles.gameIntro}>
                                    {gameInfo.gameIntro}

                                </div>
                            </Col>
                            <Col span={6}>
                                <img id='pic' className={styles.gamePic} src={gameInfo.gamePic} alt={"暂无图片"}/>
                            </Col>
                        </Row>
                    </Card>
                    <Card style={{marginTop: 16}} type="inner" title="对战房间"
                          headStyle={{
                              backgroundImage: "linear-gradient(15deg, rgba(19, 84, 122, 0.72) 0%, rgba(128, 208, 199, 0.56) 100%)",
                              color: "white"
                          }}
                    >

                        <Row gutter={16}>
                            {roomInfos.map((room) => {
                                return (
                                    <Col span={8}>

                                        <Card  className={styles.roomCard}
                                              headStyle={{backgroundColor:'transparent'}}>
                                            <Meta
                                                title={'房间' + room.roomId}
                                            />
                                            <div className={styles.roomMsg}>
                                                {
                                                    room.currentCount === room.maxCount ?
                                                        <div>
                                                            <Icon type="laptop"
                                                                  spin
                                                                  style={{fontSize: 80 + 'px', marginTop: 25 + 'px'}}/>
                                                            <p style={{marginTop: 40 + 'px'}}>该房间对战已开始！</p>
                                                        </div>
                                                        :
                                                        <div>
                                                            <Icon type="laptop"
                                                                  style={{fontSize: 80 + 'px', marginTop: 10 + 'px'}}/>
                                                            <div className={styles.availableRoomMsg}>
                                                                <p> 当前房间人数：<span style={{color:'#68c28a'}}>{room.currentCount}</span></p>
                                                                <p> 共可容纳人数：{room.maxCount}</p>

                                                            </div>
                                                            <Button size='large' className={styles.enterRoomButton}
                                                                    onClick={() => this.handleClick(room.roomId)}>
                                                                <PandaIcon style={{fontSize: '25px'}}/> 加入对局
                                                            </Button>
                                                        </div>


                                                }
                                            </div>


                                        </Card>
                                    </Col>
                                )
                            })}
                        </Row>)

                    </Card>
                </Card>
                ,
            </div>
        )
    };
}

export default WithHeaderFooter(Allrooms);
