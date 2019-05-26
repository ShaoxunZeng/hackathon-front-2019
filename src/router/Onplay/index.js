import {PureComponent} from "react";
import React from "react";
import styles from "./index.module.less";
import {NavLink} from "react-router-dom";
import WithHeaderFooter from "../../components/WithHeaderFooter";
import Board from "../../components/Board";
import {Row, Col} from 'antd';
import ScoreBoard from "./ScoreBoard";

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
    render() {
        return (
            <div className={styles.whole}>
                <div className={styles.wrapper}>
                    <div className={styles.leftScoreBoard}>
                        <ScoreBoard user="Alexchanchic"
                                    avatarColor="linear-gradient(120deg, #157c55 0%, #68c28a 100%)" defaultColor="rgba(128, 208, 199, 0.28)"/>
                    </div>
                    <div className={styles.board}>
                        <Board maps={maps}/>
                    </div>
                    < div className={styles.rightScoreBoard}>
                        <ScoreBoard user="cgy"
                                    avatarColor="linear-gradient(120deg, #13547A 0%, #8fd3f4 100%)" defaultColor="rgba(148, 221, 255, 0.35)"/>
                    </div>
                </div>
            </div>

        )
    };
}

export default WithHeaderFooter(Onplay);
