import React from 'react';
import { TabBar, Icon } from 'antd-mobile';
import { withRouter } from 'react-router-dom'
import './footernav.less';

class footernav extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedTab: 'home',
            hidden: false,
        };
    }

    componentDidMount() {
        this.setState({
            selectedTab: this.props.data.selectMenu,
        });
    }

    componentWillUnmount() {

    }

    render() {
        const CustomIcon = ({ type, className = '', size = 'md', ...restProps }) => {
            return  <svg className={`am-icon am-icon-${type.default.id} am-icon-${size} ${className}`}{...restProps}><use xlinkHref={'#'+type.default.id} /></svg>
        };
        return (
            <div className="footerNav">
                <Icon style={{display: 'none'}}/>
                <TabBar
                    unselectedTintColor="#70757E"
                    tintColor="#E7B30D"
                    barTintColor="#1F2833"
                    hidden={this.state.hidden}
                >
                    <TabBar.Item
                        title="首页"
                        key="home"
                        icon={<CustomIcon type={require('./icon/home.svg')} />}
                        selectedIcon={<CustomIcon type={require('./icon/homeselect.svg')} />}
                        selected={this.state.selectedTab === 'home'}
                        onPress={() => {
                            let self = this
                            if (self.state.selectedTab != 'home') {
                                self.props.history.push('/')
                                self.setState({
                                    selectedTab: 'home',
                                });
                            }
                        }}
                        data-seed="home"
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        title="资产"
                        key="recharge"
                        icon={<CustomIcon type={require('./icon/dollar.svg')} />}
                        selectedIcon={<CustomIcon type={require('./icon/dollarselect.svg')} />}
                        selected={this.state.selectedTab === 'recharge'}
                        onPress={() => {
                            let self = this
                            if (self.state.selectedTab != 'recharge') {
                                self.props.history.push('/recharge')
                                self.setState({
                                    selectedTab: 'recharge',
                                });
                            }
                        }}
                        data-seed="recharge"
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        title="账户中心"
                        key="account"
                        icon={<CustomIcon type={require('./icon/Account.svg')} />}
                        selectedIcon={<CustomIcon type={require('./icon/Accountselect.svg')} />}
                        selected={this.state.selectedTab === 'account'}
                        onPress={() => {
                            let self = this
                            if (self.state.selectedTab != 'account') {
                                self.props.history.push('/account')
                                self.setState({
                                    selectedTab: 'account',
                                });
                            }
                        }}
                        data-seed="account"
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        title="消息"
                        key="message"
                        icon={<CustomIcon type={require('./icon/message.svg')} />}
                        selectedIcon={<CustomIcon type={require('./icon/messageselect.svg')} />}
                        selected={this.state.selectedTab === 'message'}
                        onPress={() => {
                            let self = this
                            if (self.state.selectedTab != 'message') {
                                self.props.history.push('/message')
                                self.setState({
                                    selectedTab: 'message',
                                });
                            }
                        }}
                        data-seed="message"
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        title="客服"
                        key="kefu"
                        icon={<CustomIcon type={require('./icon/kefu.svg')} />}
                        selectedIcon={<CustomIcon type={require('./icon/kefuselect.svg')} />}
                        selected={this.state.selectedTab === 'kefu'}
                        onPress={() => {
                            let self = this
                            if (self.state.selectedTab != 'kefu') {
                                self.props.history.push('/kefu')
                                self.setState({
                                    selectedTab: 'kefu',
                                });
                            }
                        }}
                        data-seed="kefu"
                    >
                    </TabBar.Item>
                </TabBar>
            </div>
        );
    }
}

export default withRouter(footernav);
