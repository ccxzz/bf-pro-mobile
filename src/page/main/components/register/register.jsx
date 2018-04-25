import React from 'react';
import { withRouter, Link } from "react-router-dom";
import { List, InputItem, WingBlank, WhiteSpace, Button, NavBar, Modal } from 'antd-mobile';
import { createForm } from 'rc-form';
import './register.less'

const alert = Modal.alert;

function closest(el, selector) {
    const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
    while (el) {
        if (matchesSelector.call(el, selector)) {
            return el;
        }
        el = el.parentElement;
    }
    return null;
}

class register extends React.Component {
    constructor() {
        super();
        this.state = {
            isSavePass: false,
            showModalPass: false
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
        this.repassDecorator = this.props.form.getFieldDecorator('repassword', {
            initialValue: '',
            rules: [{
                required: true,
                message: '确认密码',
            }],
        });
        this.payPassDecorator = this.props.form.getFieldDecorator('paypassword', {
            initialValue: '',
            rules: [{
                required: true,
                message: '输入交易密码',
            }],
        });
        this.rePayPassDecorator = this.props.form.getFieldDecorator('repaypassword', {
            initialValue: '',
            rules: [{
                required: true,
                message: '确认交易密码',
            }],
        });
        this.yqDecorator = this.props.form.getFieldDecorator('yqcode', {
            initialValue: ''
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

    onClose = key => () => {
        this.setState({
            [key]: false,
        });
    }

    savePass = () => {
        // let self = this;
        this.props.form.validateFields((error, value) => {
            if (!error) {
                this.setState({
                    showModalPass: true,
                });
            }
        });
    }

    onWrapTouchStart = (e) => {
        // fix touch to scroll background page on iOS
        if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
            return;
        }
        const pNode = closest(e.target, '.am-modal-content');
        if (!pNode) {
            e.preventDefault();
        }
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
                        {this.repassDecorator(
                            <InputItem
                                clear
                                placeholder="确认密码"
                            ></InputItem>
                        )}
                        <div style={{ color: 'red', height: '20px' }}>
                            {(getFieldError('repassword') || []).join(', ')}
                        </div>
                        {this.payPassDecorator(
                            <InputItem
                                clear
                                placeholder="输入交易密码"
                            ></InputItem>
                        )}
                        <div style={{ color: 'red', height: '20px' }}>
                            {(getFieldError('paypassword') || []).join(', ')}
                        </div>
                        {this.rePayPassDecorator(
                            <InputItem
                                clear
                                placeholder="确认交易密码"
                            ></InputItem>
                        )}
                        <div style={{ color: 'red', height: '20px' }}>
                            {(getFieldError('repaypassword') || []).join(', ')}
                        </div>
                        {this.yqDecorator(
                            <InputItem
                                clear
                                placeholder="输入邀请码（非必填）"
                            ></InputItem>
                        )}
                    </List>
                    <WhiteSpace size="lg" />
                    {this.state.isSavePass ? <Button onClick={this.submit}>注册</Button> : <Button onClick={this.savePass}>生成秘钥</Button>}
                    <WhiteSpace size="lg" />
                    <p className="tet-center">
                        <Link className="txt-orange" to="/forgotpass">修改密码</Link>
                    </p>
                    <p className="tet-center">
                        已有账号? <Link className="txt-orange" to="/login">登录</Link>
                    </p>
                </WingBlank>
                <Modal
                    visible={this.state.showModalPass}
                    transparent
                    maskClosable={false}
                    onClose={this.onClose('showModalPass')}
                    title="秘钥"
                    footer={[{ text: '保存', onPress: () => {
                        this.setState({
                            isSavePass: true,
                        });
                    this.onClose('showModalPass')(); } }]}
                    wrapProps={{ onTouchStart: this.onWrapTouchStart }}
                >
                    <div style={{ wordBreak: 'break-all'}}>
                        <p>smmmmmmmmmmmmmmsmsmamammama</p>
                        <p>重要：此秘钥是找回登录密码和交易密码的唯一凭证，请妥善保存</p>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default withRouter(createForm()(register));
