import {PureComponent} from "react";
import React from "react";
import styles from "./index.module.less";
import {NavLink} from "react-router-dom";
import LoginInput from "./LoginInput";
import {Row, Col,} from 'antd'


class Login extends PureComponent {

    render() {
        return (
            <div className={styles.whole}>

                <div className={styles.wrapper}>
                    <Row>
                        <Col span={12}>
                            <div className={styles.leftWrapper}>
                                <div className={styles.title}>
                                    AI GAME
                                </div>
                                <div className={styles.subtitle}>
                                    WHY SIGN UP ?
                                </div>
                                <div className={styles.content}>
                                    <ul>
                                        <li>

                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </Col>
                        <Col span={12}>
                            <div className={styles.rightWrapper}>
                                <LoginInput/>
                            </div>
                        </Col>
                    </Row>

                    {/*<NavLink to='/'> 去主页 </NavLink>*/}
                </div>
            </div>


        )
    };
}

export default Login;
