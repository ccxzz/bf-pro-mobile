import React from 'react';
import { List, NavBar, WingBlank, WhiteSpace, Icon, Button } from 'antd-mobile';
import { withRouter } from 'react-router-dom'
import './account.less'

const Item = List.Item;
const Brief = Item.Brief;

class account extends React.Component {
    constructor() {
        super();
        this.state = {
        };
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    toLogOut = () => {
        sessionStorage.setItem("session", "");
        window.location.reload()
    }
    render() {
        const CustomIcon = ({ type, className = '', size = 'md', ...restProps }) => {
            return  <svg className={`am-icon am-icon-${type.default.id} am-icon-${size} ${className}`}{...restProps}><use xlinkHref={'#'+type.default.id} /></svg>
        };
        return (
            <div className="account">
                <NavBar
                    mode="dark"
                    // leftContent="Back"
                >账户中心</NavBar>
                <List className="my-list pd-5">
                    <Item thumb={<CustomIcon type={require('./icon/account-circle.svg')} />} extra={''}>
                        <span className="useraccount">123132131@qq.com</span>
                    </Item>
                </List>
                <WhiteSpace size="lg" />
                <List className="my-list">
                    <Item
                        onClick = {
                            () => {
                                this.props.history.push('/forgotpass')
                            }
                        }
                        arrow="horizontal"
                        thumb={<CustomIcon type={require('./icon/locks.svg')} />}
                        extra={''}>
                        修改密码
                    </Item>
                    <Item
                        onClick = {
                            () => {
                                this.props.history.push('/coinmanage')
                            }
                        }
                        arrow="horizontal"
                        thumb={<CustomIcon type={require('./icon/wallet.svg')} />}
                        extra={''}>
                        钱包管理
                    </Item>
                    <Item
                        arrow="horizontal"
                        thumb={<CustomIcon type={require('./icon/Google.svg')} />}
                        extra={''}>
                        谷歌认证
                    </Item>
                </List>
                <WhiteSpace size="lg" />
                <List className="my-list">
                    <Item
                        onClick = {
                            () => {
                                this.props.history.push('/invitation')
                            }
                        }
                        arrow="horizontal"
                        thumb={<CustomIcon type={require('./icon/share.svg')} />}
                        extra={''}>
                        邀请好友
                    </Item>
                    <Item
                        onClick = {
                            () => {
                                this.props.history.push('/hallmanage')
                            }
                        }
                        arrow="horizontal"
                        thumb={<CustomIcon type={require('./icon/guanli.svg')} />}
                        extra={''}>
                        厅主管理
                    </Item>
                </List>
                <WhiteSpace size="lg" />
                <WingBlank>
                    <Button onClick={this.toLogOut} type="primary">退出登录</Button>
                </WingBlank>
            </div>
        );
    }
}

export default withRouter(account);
