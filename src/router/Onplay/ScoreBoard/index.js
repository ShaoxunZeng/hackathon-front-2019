import React from "react";
import styles from "./index.module.less";
import {Row, Col, Avatar} from 'antd'

class ScoreBoard extends React.Component {
    render() {
        const {user,avatarColor,defaultColor} = this.props;

        return (
            <div className={styles.scoreBoard}
            style={{backgroundColor:defaultColor}}>
                <div className={styles.userInfo}>

                    <Avatar className={styles.userPic}
                            style={{backgroundImage:avatarColor}}

                            size={64}>{user}</Avatar>
                    <span className={styles.userName}>{user}</span>
                </div>
                <div className={styles.scoreBoardInner}>
                </div>
            </div>
        )
    }

}

export default ScoreBoard
