import React from 'react';
import { WhiteSpace, WingBlank, NavBar, Icon, Flex } from 'antd-mobile';
import { Link } from "react-router-dom";
import './messagecontent.less'

class messagecontent extends React.Component {
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
            <div className="messagecontent">
                <NavBar
                    mode="dark"
                    leftContent={<Link className="nacBarLink" to="/message">返回</Link>}
                    // rightContent={[
                    //     <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    //     <Icon key="1" type="ellipsis" />,
                    // ]}
                >消息</NavBar>
                <div className="maskBox" style={{display:'none'}}>
                    <Icon className="loadingIcon" size="lg" type="loading"/>
                </div>
                <WingBlank size="lg">
                    <WhiteSpace size="lg" />
                    <div className="messageBox">
                        <h2 className="txtCenter">消息标题</h2>
                        <Flex justify="end">
                            <span>作者:xxx</span> &nbsp;&nbsp;&nbsp;
                            <span>日期：018-4-21</span>
                        </Flex>
                        <p className="messageText">
                            啥阿萨大声道啥阿萨大声道啥阿萨大声道啥阿萨大声道啥阿萨大声道啥阿萨大声道
                            啥阿萨大声道啥阿萨大声道啥阿萨大声道啥阿萨大声道啥阿萨大声道
                            啥阿萨大声道啥阿萨大声道啥阿萨大声道啥阿萨大声道啥阿萨大声道
                            啥阿萨大声道啥阿萨大声道啥阿萨大声道啥阿萨大声道啥阿萨大声道
                        </p>
                        <p className="messageText">
                            啥阿萨大声道啥阿萨大声道啥阿萨大声道啥阿萨大声道啥阿萨大声道啥阿萨大声道
                            啥阿萨大声道啥阿萨大声道啥阿萨大声道啥阿萨大声道啥阿萨大声道
                            啥阿萨大声道啥阿萨大声道啥阿萨大声道啥阿萨大声道啥阿萨大声道
                            啥阿萨大声道啥阿萨大声道啥阿萨大声道啥阿萨大声道啥阿萨大声道
                        </p>
                        <p className="messageText">
                            啥阿萨大声道啥阿萨大声道啥阿萨大声道啥阿萨大声道啥阿萨大声道啥阿萨大声道
                            啥阿萨大声道啥阿萨大声道啥阿萨大声道啥阿萨大声道啥阿萨大声道
                            啥阿萨大声道啥阿萨大声道啥阿萨大声道啥阿萨大声道啥阿萨大声道
                            啥阿萨大声道啥阿萨大声道啥阿萨大声道啥阿萨大声道啥阿萨大声道
                        </p>
                        <p className="messageText">
                            啥阿萨大声道啥阿萨大声道啥阿萨大声道啥阿萨大声道啥阿萨大声道啥阿萨大声道
                            啥阿萨大声道啥阿萨大声道啥阿萨大声道啥阿萨大声道啥阿萨大声道
                            啥阿萨大声道啥阿萨大声道啥阿萨大声道啥阿萨大声道啥阿萨大声道
                            啥阿萨大声道啥阿萨大声道啥阿萨大声道啥阿萨大声道啥阿萨大声道
                        </p>
                        <p className="messageText">
                            啥阿萨大声道啥阿萨大声道啥阿萨大声道啥阿萨大声道啥阿萨大声道啥阿萨大声道
                            啥阿萨大声道啥阿萨大声道啥阿萨大声道啥阿萨大声道啥阿萨大声道
                            啥阿萨大声道啥阿萨大声道啥阿萨大声道啥阿萨大声道啥阿萨大声道
                            啥阿萨大声道啥阿萨大声道啥阿萨大声道啥阿萨大声道啥阿萨大声道
                        </p>

                    </div>
                    <WhiteSpace size="lg" />
                </WingBlank>
            </div>
        );
    }
}

export default messagecontent;