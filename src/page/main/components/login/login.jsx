import React from 'react';
import { List, InputItem, WingBlank, WhiteSpace, Button, NavBar } from 'antd-mobile';
import { createForm } from 'rc-form';
import './login.less'

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
        this.props.form.validateFields((error, value) => {
            console.log(error, value);
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
                                placeholder="输入账号"
                                ref={el => this.autoFocusInst = el}
                            ></InputItem>
                        )}
                        <div style={{ color: 'red', height: '20px' }}>
                            {(getFieldError('account') || []).join(', ')}
                        </div>
                        {this.passDecorator(
                            <InputItem
                                clear
                                placeholder="输入密码"
                                ref={el => this.customFocusInst = el}
                            ></InputItem>
                        )}
                        <div style={{ color: 'red', height: '20px' }}>
                            {(getFieldError('password') || []).join(', ')}
                        </div>
                    </List>
                    <WhiteSpace size="lg" />
                    <Button onClick={this.submit}>登录</Button>
                </WingBlank>
            </div>
        );
    }
}

export default createForm()(login);
