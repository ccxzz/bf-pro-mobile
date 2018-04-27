import React from 'react';
import { List, NavBar, WingBlank, WhiteSpace, Icon, Button, Flex } from 'antd-mobile';
import { Link } from "react-router-dom";
import './invitation.less';
import erweima from './icon/erweima.png'


const Item = List.Item;

class invitation extends React.Component {
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
            <div className="invitation">
                <NavBar
                    mode="dark"
                    leftContent={<Link className="nacBarLink" to="/account">返回</Link>}
                >邀请好友赚奖金</NavBar>

                <Flex className="invitation-msg">
                    <Flex.Item className="border-after">
                        <Flex>
                            <CustomIcon type={require('./icon/user.svg')} />
                            <span> &nbsp;&nbsp;成功邀请（人）</span>
                        </Flex>
                        <p>11</p>
                        <p><Link className="link-sty" to="/account">查看详情</Link></p>
                    </Flex.Item>
                    <Flex.Item>
                        <Flex>
                            <CustomIcon type={require('./icon/money.svg')} />
                            <span> &nbsp;&nbsp;提成收益</span>
                        </Flex>
                        <p> </p>
                        <p><Link className="link-sty" to="/account">查看详情</Link></p>
                    </Flex.Item>
                </Flex>
                <WhiteSpace size="lg" />
                <List className="my-list pd-5">
                    <Item className="border-bto-1" extra={''}>
                        推荐邀请码 &nbsp;&nbsp;<span className="yqcode">ASDJQKW62K23J</span>
                    </Item>
                    <Item className="list-item-content" extra={''}>
                        这是您的推荐邀请码，您可以复制分享给朋友，让他们注册账号时输入您的邀请码
                    </Item>
                </List>
                <WhiteSpace size="lg" />
                <List className="my-list pd-5">
                    <Item className="border-bto-1" extra={''}>
                        推荐链接
                    </Item>
                    <Item className="list-item-content" extra={''}>
                        <a href="javascript:void(0);">
                            https://wewillberich.coinpayline.com/Login/register.html?invit=ZBVHCXQKL
                        </a>
                        <div className="erweima">
                            <img src={erweima}/>
                        </div>
                    </Item>
                </List>
            </div>
        );
    }
}

export default invitation;
