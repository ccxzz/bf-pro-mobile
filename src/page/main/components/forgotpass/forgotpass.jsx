import React from 'react';
import { withRouter, Link } from "react-router-dom";
import { List, InputItem, WingBlank, WhiteSpace, Button, NavBar, Modal } from 'antd-mobile';
import { createForm } from 'rc-form';
import './forgotpass.less'

const alert = Modal.alert;


class forgotpass extends React.Component {
    constructor() {
        super();
        this.state = {
        };
    }

    componentDidMount() {

    }

    componentWillMount() {
        this.nameDecorator = this.props.form.getFieldDecorator('jycode', {
            initialValue: '',
            rules: [{
                required: true,
                message: '输入校验码',
            }],
        });
        this.passDecorator = this.props.form.getFieldDecorator('password', {
            initialValue: '',
            rules: [{
                required: true,
                message: '请输入新密码',
            }],
        });
        this.rePassDecorator = this.props.form.getFieldDecorator('repassword', {
            initialValue: '',
            rules: [{
                required: true,
                message: '重复新密码',
            }],
        });
    }

    componentWillUnmount() {

    }

    submit = () => {
        let self = this;
        this.props.form.validateFields((error, value) => {
            if (!error) {
                if (value.jycode === 'admin') {
                    alert('提示', '密码修改成功', [
                        { text: '确定', onPress: () => self.props.history.push('/login') },
                    ])
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
            <div className="forgotpass">
                <NavBar
                    mode="dark"
                >修改密码</NavBar>
                <WingBlank size="lg">
                    <WhiteSpace size="lg" />
                    <List>
                        {this.nameDecorator(
                            <InputItem
                                clear
                                placeholder="输入校验码/admin"
                            ></InputItem>
                        )}
                        <div style={{ color: 'red', height: '20px' }}>
                            {(getFieldError('jycode') || []).join(', ')}
                        </div>
                        {this.passDecorator(
                            <InputItem
                                clear
                                placeholder="输入新密码"
                            ></InputItem>
                        )}
                        <div style={{ color: 'red', height: '20px' }}>
                            {(getFieldError('password') || []).join(', ')}
                        </div>
                        {this.rePassDecorator(
                            <InputItem
                                clear
                                placeholder="重复新密码"
                            ></InputItem>
                        )}
                        <div style={{ color: 'red', height: '20px' }}>
                            {(getFieldError('repassword') || []).join(', ')}
                        </div>
                    </List>
                    <WhiteSpace size="lg" />
                    <Button onClick={this.submit}>确定</Button>
                    <WhiteSpace size="lg" />
                    <p className="tet-center">
                        <Link className="txt-orange" to="/login">登录</Link>
                    </p>
                    <p className="tet-center">
                        还没有账号? <Link className="txt-orange" to="/">注册</Link>
                    </p>
                </WingBlank>
            </div>
        );
    }
}

export default withRouter(createForm()(forgotpass));
