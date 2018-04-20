import React from 'react';
import { List, NavBar, WhiteSpace, Icon } from 'antd-mobile';
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

    render() {
        const CustomIcon = ({ type, className = '', size = 'md', ...restProps }) => {
            return  <svg className={`am-icon am-icon-${type.default.id} am-icon-${size} ${className}`}{...restProps}><use xlinkHref={'#'+type.default.id} /></svg>
        };
        return (
            <div className="account">
                <NavBar
                    mode="dark"
                    // leftContent="Back"
                    // rightContent={[
                    //     <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    //     <Icon key="1" type="ellipsis" />,
                    // ]}
                >资产</NavBar>
                <List className="my-list pd-5">
                    <Item thumb={<CustomIcon type={require('./icon/account-circle.svg')} />} extra={''}>
                        <span className="useraccount">123132131@qq.com</span>
                    </Item>
                </List>
                <WhiteSpace size="lg" />
                <List className="my-list">
                    <Item
                        arrow="horizontal"
                        thumb={<CustomIcon type={require('./icon/locks.svg')} />}
                        extra={'extra content'}>
                        修改密码
                    </Item>
                    <Item
                        arrow="horizontal"
                        thumb={<CustomIcon type={require('./icon/locks.svg')} />}
                        extra={'extra content'}>
                        钱包管理
                    </Item>
                    <Item
                        arrow="horizontal"
                        thumb={<CustomIcon type={require('./icon/locks.svg')} />}
                        extra={'extra content'}>
                        谷歌认证
                    </Item>
                </List>
            </div>
        );
    }
}

export default account;