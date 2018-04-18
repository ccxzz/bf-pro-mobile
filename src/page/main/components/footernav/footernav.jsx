import React from 'react';
import { TabBar, Icon } from 'antd-mobile';
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

    }

    componentWillUnmount() {

    }

    render() {
        const CustomIcon = ({ type, className = '', size = 'md', ...restProps }) => {
            console.log(type)
            return  <svg className={`am-icon am-icon-${type.default.id} am-icon-${size} ${className}`}{...restProps}><use xlinkHref={'#'+type.default.id} /></svg>
        };
        return (
            <div className="footerNav">
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    hidden={this.state.hidden}
                >
                    <TabBar.Item
                        title="首页"
                        key="home"
                        icon={<CustomIcon type={require('./icon/aax.svg')} />}
                        selectedIcon={<CustomIcon type={require('./icon/aax.svg')} />
                        }
                        selected={this.state.selectedTab === 'home'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'home',
                            });
                        }}
                        data-seed="home"
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        title="资产"
                        key="recharge"
                        icon={<Icon type="home"/>}
                        selectedIcon={<Icon className="active" type="home"/>
                        }
                        selected={this.state.selectedTab === 'recharge'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'recharge',
                            });
                        }}
                        data-seed="recharge"
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        title="账户中心"
                        key="message"
                        icon={<Icon type="home"/>}
                        selectedIcon={<Icon className="active" type="home"/>
                        }
                        badge={2}
                        selected={this.state.selectedTab === 'message'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'message',
                            });
                        }}
                        data-seed="message"
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        title="消息"
                        key="message"
                        icon={<Icon type="home"/>}
                        selectedIcon={<Icon className="active" type="home"/>
                        }
                        badge={2}
                        selected={this.state.selectedTab === 'message'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'message',
                            });
                        }}
                        data-seed="message"
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        title="客服"
                        key="message"
                        icon={<Icon type="home"/>}
                        selectedIcon={<Icon className="active" type="home"/>
                        }
                        badge={2}
                        selected={this.state.selectedTab === 'message'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'message',
                            });
                        }}
                        data-seed="message"
                    >
                    </TabBar.Item>
                </TabBar>
            </div>
        );
    }
}

export default footernav;