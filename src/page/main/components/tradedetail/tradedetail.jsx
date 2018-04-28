import React from 'react';
import { NavBar, Flex } from 'antd-mobile';
import './tradedetail.less'

class tradedetail extends React.Component {
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
            <div className="tradedetail">
                <NavBar
                    mode="dark"
                    // leftContent="Back"
                >交易状况</NavBar>
                <Flex className="flex-header">
                    <Flex.Item>
                        <div className="match-name">西班牙甲组联赛</div>
                        <div className="match-detail">
                            爱斯宾奴&nbsp;<span>1 / 1.5</span>&nbsp;v&nbsp;拉斯彭马斯
                        </div>
                    </Flex.Item>
                </Flex>
                <Flex className="flex-con">
                    <Flex.Item>
                        <div>
                            <strong>足球</strong>&nbsp;<strong>让球</strong>
                        </div>
                        <div className="match-text">
                            拉斯彭马斯&nbsp;@&nbsp;<span className="color-red">1.03</span>
                        </div>
                        <div>
                            投注额：<span className="color-black">50.00</span>
                        </div>
                        <div>
                            <span className="color-black">OU128912893SDF238</span>
                        </div>
                    </Flex.Item>
                    <Flex.Item className="text-right">
                        <div>
                            可赢金额：<span className="color-green">51.50</span>
                        </div>
                        <div>
                            02:17:36 (香港盘)
                        </div>
                    </Flex.Item>
                </Flex>
                <Flex className="flex-header">
                    <Flex.Item>
                        <div className="match-name">西班牙甲组联赛</div>
                        <div className="match-detail">
                            爱斯宾奴&nbsp;<span>1 / 1.5</span>&nbsp;v&nbsp;拉斯彭马斯
                        </div>
                    </Flex.Item>
                </Flex>
                <Flex className="flex-con">
                    <Flex.Item>
                        <div>
                            <strong>足球</strong>&nbsp;<strong>让球</strong>
                        </div>
                        <div className="match-text">
                            拉斯彭马斯&nbsp;@&nbsp;<span className="color-red">1.03</span>
                        </div>
                        <div>
                            投注额：<span className="color-black">50.00</span>
                        </div>
                        <div>
                            <span className="color-black">OU128912893SDF238</span>
                        </div>
                    </Flex.Item>
                    <Flex.Item className="text-right">
                        <div>
                            可赢金额：<span className="color-green">51.50</span>
                        </div>
                        <div>
                            02:17:36 (香港盘)
                        </div>
                    </Flex.Item>
                </Flex>
                <Flex className="flex-header">
                    <Flex.Item>
                        <div className="match-name">西班牙甲组联赛</div>
                        <div className="match-detail">
                            爱斯宾奴&nbsp;<span>1 / 1.5</span>&nbsp;v&nbsp;拉斯彭马斯
                        </div>
                    </Flex.Item>
                </Flex>
                <Flex className="flex-con">
                    <Flex.Item>
                        <div>
                            <strong>足球</strong>&nbsp;<strong>让球</strong>
                        </div>
                        <div className="match-text">
                            拉斯彭马斯&nbsp;@&nbsp;<span className="color-red">1.03</span>
                        </div>
                        <div>
                            投注额：<span className="color-black">50.00</span>
                        </div>
                        <div>
                            <span className="color-black">OU128912893SDF238</span>
                        </div>
                    </Flex.Item>
                    <Flex.Item className="text-right">
                        <div>
                            可赢金额：<span className="color-green">51.50</span>
                        </div>
                        <div>
                            02:17:36 (香港盘)
                        </div>
                    </Flex.Item>
                </Flex>
            </div>
        );
    }
}

export default tradedetail;
