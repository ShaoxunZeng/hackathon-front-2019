import {PureComponent} from "react";
import React from "react";
import styles from "./index.module.less";

import WithHeaderFooter from "../../components/WithHeaderFooter";
import Board from "../../components/Board";
import ScoreBoard from "./ScoreBoard";
import {getRoomInfo} from "../../services/apiWS";
import {Icon} from "antd"
import {leaveRoom} from "../../services/apiHTTP";

const maps = [
    {
        username: 'user1',
        positions: [
            {x: 5, y: 7},
            {x: 8, y: 6},
            {x: 4, y: 6},
            {x: 4, y: 7},
            {x: 5, y: 9},
            {x: 6, y: 7}]
    },
    {
        username: 'user2',
        positions: [
            {x: 6, y: 7},
            {x: 5, y: 9},
            {x: 6, y: 6},
            {x: 8, y: 7},
            {x: 7, y: 6}]
    }
];


class Onplay extends PureComponent {
    constructor(props) {
        super(props);
        // this.state = {
        //   users: [],
        //   maps: maps,
        //   prepareStatus: true //todo()
        // }
        this.state = {
            maps: [],
            prepareStatus: false
        }
    }

    componentWillMount() {
        let roomid = this.props.match.params;
        let {gameName, token} = this.props.location.state;
        let socket = getRoomInfo(gameName, roomid);
        alert(`Your Token: ${token}`);
        //打开事件
        socket.onopen = function () {
            console.log("Socket 已打开");
        };
        //获得消息事件
        socket.onmessage = function (msg) {
            console.log(JSON.parse(msg.data));
            //发现消息进入    开始处理前端触发逻辑
            //todo() 房间满员后判断两个人的准备状态
            this.setState({
                maps: maps,  //todo() test data
                prepareStatus: true //todo() test data
            })
        };

    }

    componentWillUnmount() {
        let roomid = this.props.match.params;
        let {gameName} = this.props.location;
        leaveRoom(gameName, roomid, window.localStorage.username);
    }

    render() {
        return (
            <div className={styles.whole}>
                {
                    this.state.maps.length === 2 ?
                        <div className={styles.wrapper}>
                            <div className={styles.leftScoreBoard}>
                                <ScoreBoard user={this.state.maps[0].username} record={this.state.maps[0].positions}
                                            avatarColor="linear-gradient(120deg, #157c55 0%, #68c28a 100%)"
                                            defaultColor="rgba(128, 208, 199, 0.28)"/>
                            </div>
                            <div className={styles.board}>
                                {this.state.prepareStatus ?
                                    <Board maps={this.state.maps}/> :
                                    <div className={styles.hintMsg}>
                                        AI对战即将开始
                                        <Icon style={{
                                            fontSize: 50 + 'px',
                                            marginTop: 10 + 'px',
                                            color: '#68c28a',
                                            marginLeft: 20 + 'px'
                                        }}
                                              type="loading"/></div>
                                }
                            </div>
                            < div className={styles.rightScoreBoard}>
                                <ScoreBoard user={this.state.maps[1].username} record={this.state.maps[1].positions}
                                            avatarColor="linear-gradient(120deg, #13547A 0%, #8fd3f4 100%)"
                                            defaultColor="rgba(148, 221, 255, 0.35)"/>
                            </div>
                        </div> :
                        <div className={styles.waitStatus}>
                            <Board maps={maps}/>
                            <div className={styles.cover}>
                                <div className={styles.msg}>
                                    <div>等待其他玩家加入…</div>
                                    <div>
                                        <Icon
                                            style={{fontSize: 100 + 'px', marginTop: 10 + 'px', color: '#68c28a'}}
                                            type="loading"/>
                                    </div>
                                </div>
                            </div>

                        </div>


                }

            </div>

        )
    }
    ;
}

export default WithHeaderFooter(Onplay);
