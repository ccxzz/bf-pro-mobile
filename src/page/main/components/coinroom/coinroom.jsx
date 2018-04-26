import React from 'react';
import { Card, Grid, WingBlank, WhiteSpace,  Flex, Button } from 'antd-mobile';
import { Link } from "react-router-dom";
import  './coinroom.less';

const data = [
    {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
        text: `房间1`,
    },
    {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
        text: `房间2`,
    },
    {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
        text: `房间3`,
    },
    {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
        text: `房间4`,
    }
]

class coinroom extends React.Component {
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
            <div className="coinroom">
                <WingBlank size="lg">
                    <WhiteSpace size="lg" />
                    <div className="accountmsg">
                        <Card>
                            <Card.Header
                                title="CPC币厅"
                                thumb={<img src='http://xinbfzx.oss-ap-southeast-1.aliyuncs.com/upload/pic/cpc.png'/>}
                                extra={<span></span>}
                            />
                            <Card.Body>
                                <div>
                                    <Flex>
                                        <Flex.Item>
                                            可用余额：1000
                                        </Flex.Item>
                                        <Flex.Item>
                                            冻结余额： 998
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
                    </div>
                    <WhiteSpace size="lg" />
                    <Grid data={data}  columnNum={3} />
                    <WhiteSpace size="lg" />
                </WingBlank>
            </div>
        );
    }
}

export default coinroom;
