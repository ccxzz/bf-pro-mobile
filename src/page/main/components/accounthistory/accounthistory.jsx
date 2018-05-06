import React from 'react';
import { NavBar, Flex } from 'antd-mobile';
import './accounthistory.less'

class accounthistory extends React.Component {
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
            <div className="accounthistory">
                <NavBar
                    mode="dark"
                    // leftContent="Back"
                >账户历史摘要</NavBar>
                <Flex className="flex-header">
                    <Flex.Item>
                        <div>日期</div>
                    </Flex.Item>
                    <Flex.Item>
                        <div>投注额</div>
                    </Flex.Item>
                    <Flex.Item>
                        <div>有效金额</div>
                    </Flex.Item>
                    <Flex.Item>
                        <div>输/赢</div>
                    </Flex.Item>
                </Flex>
                <div className="flex-body">
                    <Flex>
                        <Flex.Item>
                            <div>4月23</div>
                            <div>星期一</div>
                        </Flex.Item>
                        <Flex.Item>
                            <div>111</div>
                        </Flex.Item>
                        <Flex.Item>
                            <div>11</div>
                        </Flex.Item>
                        <Flex.Item>
                            <div className="text-v">2.3</div>
                        </Flex.Item>
                    </Flex>
                    <Flex>
                        <Flex.Item>
                            <div>4月22</div>
                            <div>星期日</div>
                        </Flex.Item>
                        <Flex.Item>
                            <div>111</div>
                        </Flex.Item>
                        <Flex.Item>
                            <div>11</div>
                        </Flex.Item>
                        <Flex.Item>
                            <div className="text-l">222</div>
                        </Flex.Item>
                    </Flex>
                    <Flex>
                        <Flex.Item>
                            <div>4月21</div>
                            <div>星期六</div>
                        </Flex.Item>
                        <Flex.Item>
                            <div>111</div>
                        </Flex.Item>
                        <Flex.Item>
                            <div>11</div>
                        </Flex.Item>
                        <Flex.Item>
                            <div className="text-l">111</div>
                        </Flex.Item>
                    </Flex>
                    <Flex>
                        <Flex.Item>
                            <div>4月20</div>
                            <div>星期五</div>
                        </Flex.Item>
                        <Flex.Item>
                            <div>-</div>
                        </Flex.Item>
                        <Flex.Item>
                            <div>-</div>
                        </Flex.Item>
                        <Flex.Item>
                            <div>-</div>
                        </Flex.Item>
                    </Flex>
                    <Flex>
                        <Flex.Item>
                            <div>4月19</div>
                            <div>星期四</div>
                        </Flex.Item>
                        <Flex.Item>
                            <div>-</div>
                        </Flex.Item>
                        <Flex.Item>
                            <div>-</div>
                        </Flex.Item>
                        <Flex.Item>
                            <div>-</div>
                        </Flex.Item>
                    </Flex>
                    <Flex>
                        <Flex.Item>
                            <div>4月18</div>
                            <div>星期三</div>
                        </Flex.Item>
                        <Flex.Item>
                            <div>-</div>
                        </Flex.Item>
                        <Flex.Item>
                            <div>-</div>
                        </Flex.Item>
                        <Flex.Item>
                            <div>-</div>
                        </Flex.Item>
                    </Flex>
                    <Flex>
                        <Flex.Item>
                            <div>4月17</div>
                            <div>星期二</div>
                        </Flex.Item>
                        <Flex.Item>
                            <div>-</div>
                        </Flex.Item>
                        <Flex.Item>
                            <div>-</div>
                        </Flex.Item>
                        <Flex.Item>
                            <div>-</div>
                        </Flex.Item>
                    </Flex>
                </div>
            </div>
        );
    }
}

export default accounthistory;
