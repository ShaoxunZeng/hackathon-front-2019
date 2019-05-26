import {PureComponent} from "react";
import React from "react";
import styles from "./index.module.less";

import WithHeaderFooter from "../../components/WithHeaderFooter";
import Board from "../../components/Board";
import ScoreBoard from "./ScoreBoard";
import {getRoomInfo} from "../../services/apiWS";

const maps = [
  {
    id: 100,
    positions: [{
      x: 5,
      y: 7
    }, {
      x: 8,
      y: 6
    }, {
      x: 4,
      y: 6
    }, {
      x: 4,
      y: 7
    }, {
      x: 5,
      y: 9
    }, {
      x: 6,
      y: 7
    }, {
      x: 0,
      y: 7
    }]
  },
  {
    id: 102,
    positions: [{
      x: 6,
      y: 7
    }, {
      x: 5,
      y: 9
    }, {
      x: 6,
      y: 6
    }, {
      x: 6,
      y: 7
    }, {
      x: 7,
      y: 6
    }]
  }
];

class Onplay extends PureComponent {
  componentWillMount() {
    let socket = getRoomInfo(20);
    //打开事件
    socket.onopen = function () {
      console.log("Socket 已打开");
    };
    //获得消息事件
    socket.onmessage = function (msg) {
      console.log(JSON.parse(msg.data));
      //发现消息进入    开始处理前端触发逻辑
    };
  }

  render() {
    return (
        <div className={styles.whole}>
          <div className={styles.wrapper}>
            <div className={styles.leftScoreBoard}>
              <ScoreBoard user="Alexchanchic"
                          avatarColor="linear-gradient(120deg, #157c55 0%, #68c28a 100%)"
                          defaultColor="rgba(128, 208, 199, 0.28)"/>
            </div>
            <div className={styles.board}>
              <Board maps={maps}/>
            </div>
            < div className={styles.rightScoreBoard}>
              <ScoreBoard user="cgy"
                          avatarColor="linear-gradient(120deg, #13547A 0%, #8fd3f4 100%)"
                          defaultColor="rgba(148, 221, 255, 0.35)"/>
            </div>
          </div>
        </div>

    )
  };
}

export default WithHeaderFooter(Onplay);
