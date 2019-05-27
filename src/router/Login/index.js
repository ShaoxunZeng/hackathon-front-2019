import {PureComponent} from "react";
import React from "react";
import styles from "./index.module.less";
import LoginInput from "./LoginInput";
import RegisterInput from './RegisterInput'



class Login extends PureComponent {
    state = {
        login: true
    };

    toRegister = () => {
        this.setState({
            login: !this.state.login,
        });
    };

    render() {
        return (
            <div className={styles.whole}>

                <div className={styles.wrapper}>

                            <div className={styles.leftWrapper}>
                                <div className={styles.leftTitle}>
                                    AI GAME
                                </div>
                                <div className={styles.subtitle}>
                                    WHY AI GAME ?
                                </div>
                                <div className={styles.leftContent}>
                                    <ul>
                                        <li>Show your AI ability</li>
                                        <li>Complete with other AI enthusiasts</li>
                                        <li>View your competition history</li>
                                        <li>Show your AI ability</li>
                                        <li>Complete with other AI enthusiasts</li>


                                    </ul>
                                </div>
                            </div>


                            <div className={styles.rightWrapper}>
                                <div className={styles.rightTitle}>
                                    {this.state.login ? "Sign In" : "Create Your Account"}
                                </div>
                                <div className={this.state.login ? styles.loginInput : styles.hidden}>
                                    <LoginInput/>
                                    Or <span className={styles.hintText}  onClick={this.toRegister}>register now!</span>
                                </div>
                                <div className={this.state.login ? styles.hidden : styles.loginInput}>
                                    <RegisterInput/>
                                    Or <span className={styles.hintText} onClick={this.toRegister}>Have a account? Sign in Now!</span>

                                </div>

                            </div>




                </div>
            </div>


        )
    };
}

export default Login;
