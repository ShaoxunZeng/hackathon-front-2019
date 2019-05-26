import React from "react";
import styles from "./index.module.less";
import {Row, Col, Avatar} from 'antd'

class ScoreBoard extends React.Component {
    render() {
        const {user, avatarColor, defaultColor, record} = this.props;

        return (
            <div className={styles.scoreBoard}
                 style={{backgroundColor: defaultColor}}>
                <div className={styles.userInfo}>

                    <Avatar className={styles.userPic}
                            style={{backgroundImage: avatarColor}}
                            size={64}>{user}</Avatar>
                    <span className={styles.userName}>{user}</span>
                </div>
                <div className={styles.scoreBoardInner}>
                    <span style={{fontSize:15,fontWeight:600}}>对战记录 Position</span>
                    {
                        record.map((pos,index) => {
                            return (
                                <div style={{marginTop:5+'px',letterSpacing:2+'px'}}>
                                    <em style={{color:defaultColor,fontWeight:600}}>{index+1}</em><span>（{pos.x} ,{pos.y})</span>
                                </div>


                            )
                        })
                    }


                </div>
            </div>
        )
    }

}

export default ScoreBoard
