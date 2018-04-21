import React from 'react';
import { WhiteSpace, WingBlank, Flex } from 'antd-mobile';
import { Link } from "react-router-dom";
import './exception.less'

class exception extends React.Component {
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
        const CustomIcon = ({ type, className = '', size = 'md', ...restProps }) => {
            return  <svg className={`am-icon am-icon-${type.default.id} am-icon-${size} ${className}`}{...restProps}><use xlinkHref={'#'+type.default.id} /></svg>
        };
        return (
            <div className="exception">
                <WingBlank size="lg">
                    <WhiteSpace size="lg" />
                    <Flex justify="center">
                        <CustomIcon type={require('../../static/images/page404.svg')} />
                    </Flex>
                    <Flex justify="center">
                        <div className="nopageText">
                            <h1>404</h1>
                            <p>抱歉，你访问的页面不存在</p>
                            <Link className="toHomePage" to="/">返回首页</Link>
                        </div>
                    </Flex>
                    <WhiteSpace size="lg" />
                </WingBlank>
            </div>
        );
    }
}

export default exception;