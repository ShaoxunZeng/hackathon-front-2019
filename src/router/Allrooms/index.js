import {PureComponent} from "react";
import React from "react";
import styles from "./index.module.less";
import {NavLink} from "react-router-dom";
import WithHeaderFooter from "../../components/WithHeaderFooter";
import {Card, Row, Col, Icon, Button} from 'antd'
import {enterRoom, getAllRooms} from "../../services/apiHTTP";

const {Meta} = Card;

const gameInfo = {
  gameName: 'AI 对战五子棋',
  gameIntro: '五子棋是世界智力运动会竞技项目之一，是一种两人对弈的纯策略型棋类游戏，是世界智力运动会竞技项目之一，通常双方分别使用黑白两色的棋子，下在棋盘直线与横线的交叉点上，先形成5子连线者获胜。' +
      '棋具与围棋通用，起源于中国上古时代的传统黑白棋种之一。主要流行于华人和汉字文化圈的国家以及欧美一些地区，是世界上最古老的棋。' +
      '容易上手，老少皆宜，而且趣味横生，引人入胜；不仅能增强思维能力，提高智力，而且富含哲理，有助于修身养性。已在各个游戏平台有应用。',
  gamePic: 'https://cdn.nlark.com/yuque/0/2019/png/248245/1558873338221-f29b560c-b606-4fd9-9476-3b173c0c4430.png',
  rooms: [
    {roomId: 1, currentCount: 0, maxCount: 2},
    {roomId: 2, currentCount: 1, maxCount: 2},
    {roomId: 3, currentCount: 0, maxCount: 2},
    {roomId: 4, currentCount: 2, maxCount: 2},
    {roomId: 5, currentCount: 0, maxCount: 2},
    {roomId: 6, currentCount: 1, maxCount: 2},
    {roomId: 7, currentCount: 0, maxCount: 2},
    {roomId: 8, currentCount: 2, maxCount: 2},
  ]
};

class Allrooms extends PureComponent {


  constructor(props) {
    super(props);

    this.state = {
      gameInfo: {
        gameName: '',
        gameIntro: '',
        gamePic: '',
        rooms: [
          {roomId: 0, currentCount: 0, maxCount: 0}
        ]
      },
      isLoading: true
    }

  }


  componentWillMount() {
    const {gamename} = this.props.match.params;
    //todo() 调用获取游戏信息接口 调用获取房间信息接口 合并
    getAllRooms(gamename).then((res) =>
        this.setState({
            gameInfo: res,
            isLoading: false
        })).catch((error) => {
            alert(error);
    });
    // this.setState({
    //   gameInfo: gameInfo,
    //   isLoading: false
    // })
  }

  handleClick = (roomId) => {
    //todo() 进入房间比赛 joinNewUser getToken confirm=>push
    let token = "";
    enterRoom(this.state.gameInfo.gameName, roomId, window.localStorage.username).then((res) => {
      token = res.token;
      console.log(token)
    });
    this.props.history.push(`/room/${roomId}`, {gameName: this.state.gameInfo.gameName});
    console.log(roomId)
  };

  render() {
    const {isLoading, gameInfo} = this.state;
    return isLoading ? "" : (

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
                    backgroundImage: "linear-gradient(120deg, rgba(104, 194, 138, 0.2) 0%, rgba(143, 211, 244, 0.18) 100%)",
                    color: "grey",
                    letterSpacing: 3
                  }}
            >
              <Row gutter={24}>
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
                    backgroundImage: "linear-gradient(120deg, rgba(104, 194, 138, 0.2) 0%, rgba(143, 211, 244, 0.18) 100%)",
                    color: "grey",
                    letterSpacing: 3

                  }}
            >

              <Row gutter={16}>
                {gameInfo.rooms.map((room) => {
                  return (
                      <Col span={8}>

                        <Card className={styles.roomCard}
                              headStyle={{backgroundColor: 'transparent'}}>
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
                                      <p> 当前房间人数：<span
                                          style={{color: '#68c28a'}}>{room.currentCount}</span>
                                      </p>
                                      <p> 共可容纳人数：{room.maxCount}</p>

                                    </div>
                                    <Button size='large' className={styles.enterRoomButton}
                                            onClick={() => this.handleClick(room.roomId)}>
                                      <Icon type='export' style={{fontSize: '20px'}}/> 加入对局
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
