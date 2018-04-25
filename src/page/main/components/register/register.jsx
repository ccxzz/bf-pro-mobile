import React from 'react';
import { withRouter, Link } from "react-router-dom";
import { List, InputItem, WingBlank, WhiteSpace, Button, NavBar, Modal } from 'antd-mobile';
import { createForm } from 'rc-form';
import './register.less'

const alert = Modal.alert;


class register extends React.Component {
    constructor() {
        super();
        this.state = {
        };
    }

    componentDidMount() {

    }

    componentWillMount() {
        this.nameDecorator = this.props.form.getFieldDecorator('account', {
            initialValue: '',
            rules: [{
                required: true,
                message: '请输入账号',
            }],
        });
        this.passDecorator = this.props.form.getFieldDecorator('password', {
            initialValue: '',
            rules: [{
                required: true,
                message: '请输入密码',
            }],
        });
    }

    componentWillUnmount() {

    }

    submit = () => {
        let self = this;
        this.props.form.validateFields((error, value) => {
            if (!error) {
                alert('提示', '注册成功', [
                    { text: '确定', onPress: () => self.props.history.push('/login') },
                ])
            }
        });
    }
    render() {
        // const { getFieldProps } = this.props.form;
        const { getFieldError } = this.props.form;
        return (
            <div className="register">
                <NavBar
                    mode="dark"
                >注册</NavBar>
                <WingBlank size="lg">
                    <WhiteSpace size="lg" />
                    <List>
                        {this.nameDecorator(
                            <InputItem
                                clear
                                placeholder="请输入账号"
                            ></InputItem>
                        )}
                        <div style={{ color: 'red', height: '20px' }}>
                            {(getFieldError('account') || []).join(', ')}
                        </div>
                        {this.passDecorator(
                            <InputItem
                                clear
                                placeholder="输入密码"
                            ></InputItem>
                        )}
                        <div style={{ color: 'red', height: '20px' }}>
                            {(getFieldError('password') || []).join(', ')}
                        </div>
                    </List>
                    <WhiteSpace size="lg" />
                    <Button onClick={this.submit}>注册</Button>
                    <WhiteSpace size="lg" />
                    <p className="tet-center">
                        <Link className="txt-orange" to="/forgotpass">修改密码</Link>
                    </p>
                    <p className="tet-center">
                        已有账号? <Link className="txt-orange" to="/login">登录</Link>
                    </p>
                </WingBlank>
            </div>
        );
    }
}

export default withRouter(createForm()(register));
