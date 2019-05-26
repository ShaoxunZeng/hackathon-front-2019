import {Form, Icon, Input, Button, Checkbox} from 'antd';
import * as React from "react";
import {register} from "../../../services/apiHTTP"

class RegisterInput extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                register({
                    username: values.username,
                    password: values.password
                }).then(res=>{
                    console.log(res)
                })


            }
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="Register-form">
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{required: true, message: 'Please input your username!'}],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                            placeholder="Username"
                        />,
                    )}
                </Form.Item>

                <Form.Item>
                    {getFieldDecorator('email', {
                        rules: [{required: true, message: 'Please input your Email!'}],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                            type="email"
                            placeholder="Email"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{required: true, message: 'Please input your Password!'}],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                            type="password"
                            placeholder="Password"
                        />,
                    )}
                </Form.Item>


                <Form.Item>
                    <Button type="primary" htmlType="submit" className="register-form-button">
                        Create an account
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

export default Form.create()(RegisterInput);



