import React from 'react';
import { Card, WingBlank, WhiteSpace, Flex, Button } from 'antd-mobile';
import { Link } from "react-router-dom";

class accountmsg extends React.Component {
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
            <div className="accountmsg">
                <WingBlank size="lg">
                    <WhiteSpace size="lg" />
                    <Card>
                        <Card.Header
                            title="1283883111"
                            thumb={<CustomIcon type={require('./icon/account-circle.svg')} />}
                            extra={<span></span>}
                        />
                        <Card.Body>
                            <div>
                                <Flex>
                                    <Flex.Item>
                                        链家总币量：1000
                                    </Flex.Item>
                                    <Flex.Item>
                                        可用： 998
                                    </Flex.Item>
                                </Flex>
                                <Flex>
                                    <Flex.Item>
                                        冻结：1000
                                    </Flex.Item>
                                    <Flex.Item>
                                        分红冻结： 998
                                    </Flex.Item>
                                </Flex>
                            </div>
                        </Card.Body>
                        <Card.Footer content="" extra={<div style={{ display: 'flex',justifyContent: 'space-around' }}>
                            <Button className="assetsBtn">充值</Button>
                            <Button className="assetsBtn">提现</Button>
                            <Button className="assetsBtn">交易</Button>
                            <Link to="/recharge" className="assetsBtn">兑换</Link>
                        </div>} />
                    </Card>
                    <WhiteSpace size="lg" />
                </WingBlank>
            </div>
        );
    }
}

export default accountmsg;
