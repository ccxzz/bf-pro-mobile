import React from 'react';
import { NavBar, Flex, WingBlank, WhiteSpace } from 'antd-mobile';
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import './matchlist.less'

class matchlist extends React.Component {
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
        console.log(this.props)
        return (
            <div className="matchlist">
                <NavBar
                    mode="dark"
                    leftContent={<Link className="nacBarLink" to="/guessingcompetition/CPC">返回</Link>}
                >赛事</NavBar>
                <WingBlank size="lg">
                    <WhiteSpace size="lg" />
                    <Flex className="flex-item">
                        <Flex.Item className="flex-item-left">
                            英格兰超级联赛
                        </Flex.Item>
                        <Flex.Item className="flex-item-right">
                            2
                        </Flex.Item>
                    </Flex>
                    <WhiteSpace size="lg" />
                    <Flex className="flex-item">
                        <Flex.Item className="flex-item-left">
                            英格兰超级联赛
                        </Flex.Item>
                        <Flex.Item className="flex-item-right">
                            2
                        </Flex.Item>
                    </Flex>
                    <WhiteSpace size="lg" />
                    <Flex className="flex-item">
                        <Flex.Item className="flex-item-left">
                            英格兰超级联赛
                        </Flex.Item>
                        <Flex.Item className="flex-item-right">
                            2
                        </Flex.Item>
                    </Flex>
                    <WhiteSpace size="lg" />
                    <Flex className="flex-item">
                        <Flex.Item className="flex-item-left">
                            英格兰超级联赛
                        </Flex.Item>
                        <Flex.Item className="flex-item-right">
                            2
                        </Flex.Item>
                    </Flex>
                    <WhiteSpace size="lg" />
                    <Flex className="flex-item">
                        <Flex.Item className="flex-item-left">
                            英格兰超级联赛
                        </Flex.Item>
                        <Flex.Item className="flex-item-right">
                            2
                        </Flex.Item>
                    </Flex>
                    <WhiteSpace size="lg" />
                </WingBlank>
            </div>
        );
    }
}

export default withRouter(matchlist);
