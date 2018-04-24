import React from 'react';
import { Card, WingBlank, WhiteSpace, Button, NavBar } from 'antd-mobile';
import './login.less'

class login extends React.Component {
    constructor() {
        super();
        this.state = {
        };
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className="login">
                <NavBar
                    mode="dark"
                    // leftContent="Back"
                    // rightContent={[
                    //     <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    //     <Icon key="1" type="ellipsis" />,
                    // ]}
                >登录</NavBar>
                <WingBlank size="lg">
                    <WhiteSpace size="lg" />
                    <WhiteSpace size="lg" />
                </WingBlank>
            </div>
        );
    }
}

export default login;
