import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { withRouter, Link } from "react-router-dom";
import LoginAction from  '../../store/action/loginaction';
import { List, InputItem, WingBlank, WhiteSpace, Button, NavBar, Modal } from 'antd-mobile';
import { createForm } from 'rc-form';
import './login.less'

const alert = Modal.alert;

const mapStateToProps = (state) => {
    return ({
        isLogin: state.loginreducer.isLogin
    })
};
const mapDispatchToProps = (dispatch) => {
    return { localLoginActions: bindActionCreators(LoginAction, dispatch) }
};

class login extends React.Component {
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
        const { localLoginActions } = this.props;
        let self = this;
        this.props.form.validateFields((error, value) => {
            if (!error) {
                if (value.account === 'admin' && value.password === '123456') {

                    sessionStorage.setItem("session", value.account)

                    localLoginActions.loginStateChange(value.account);
                    self.props.history.push('/')
                } else {
                    alert('提示', '账号或密码错误', [
                        { text: '关闭' },
                    ])
                }
            }
        });
    }
    render() {
        // const { getFieldProps } = this.props.form;
        const { getFieldError } = this.props.form;
        return (
            <div className="login">
                <NavBar
                    mode="dark"
                >登录</NavBar>
                <WingBlank size="lg">
                    <WhiteSpace size="lg" />
                    <List>
                        {this.nameDecorator(
                            <InputItem
                                clear
                                placeholder="输入账号/admin"
                                ref={el => this.autoFocusInst = el}
                            ></InputItem>
                        )}
                        <div style={{ color: 'red', height: '20px' }}>
                            {(getFieldError('account') || []).join(', ')}
                        </div>
                        {this.passDecorator(
                            <InputItem
                                clear
                                placeholder="输入密码/123456"
                                ref={el => this.customFocusInst = el}
                            ></InputItem>
                        )}
                        <div style={{ color: 'red', height: '20px' }}>
                            {(getFieldError('password') || []).join(', ')}
                        </div>
                    </List>
                    <WhiteSpace size="lg" />
                    <Button onClick={this.submit}>登录</Button>
                    <WhiteSpace size="lg" />
                    <p className="tet-center">
                        <Link className="txt-orange" to="/forgotpass">忘记密码?</Link>
                    </p>
                    <p className="tet-center">
                        还没有账号? <Link className="txt-orange" to="/register">注册</Link>
                    </p>
                </WingBlank>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(createForm()(login)));
