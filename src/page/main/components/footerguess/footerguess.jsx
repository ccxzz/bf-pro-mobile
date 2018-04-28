import React from 'react';
import { TabBar, Icon } from 'antd-mobile';
import { withRouter } from 'react-router-dom'
import './footerguess.less';

class footerguess extends React.Component {
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
            <div className="footerguess">
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
                        title="账户历史"
                        key="accounthistory"
                        icon={<CustomIcon type={require('./icon/accountls.svg')} />}
                        selectedIcon={<CustomIcon type={require('./icon/accountlsselect.svg')} />}
                        selected={this.state.selectedTab === 'accounthistory'}
                        onPress={() => {
                            let self = this
                            if (self.state.selectedTab != 'accounthistory') {
                                self.props.history.push('/accounthistory')
                                self.setState({
                                    selectedTab: 'accounthistory',
                                });
                            }
                        }}
                        data-seed="accounthistory"
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        title="交易状况"
                        key="jystatus"
                        icon={<CustomIcon type={require('./icon/jystatus.svg')} />}
                        selectedIcon={<CustomIcon type={require('./icon/jystatusselect.svg')} />}
                        selected={this.state.selectedTab === 'jystatus'}
                        onPress={() => {
                            let self = this
                            if (self.state.selectedTab != 'jystatus') {
                                self.props.history.push('/jystatus')
                                self.setState({
                                    selectedTab: 'jystatus',
                                });
                            }
                        }}
                        data-seed="jystatus"
                    >
                    </TabBar.Item>
                </TabBar>
            </div>
        );
    }
}

export default withRouter(footerguess);
