import React from 'react';
import { WingBlank, WhiteSpace, Button, NavBar, Modal, List } from 'antd-mobile';
import { Link } from "react-router-dom";
import './addhall.less'

const alert = Modal.alert;
const Item = List.Item;

const data = [
    {
        name: '比特币',
        type: 'BTC',
        icon: 'http://xinbfzx.oss-ap-southeast-1.aliyuncs.com/upload/pic/btc.png'
    },
    {
        name: '达世币',
        type: 'DASH',
        icon: 'http://xinbfzx.oss-ap-southeast-1.aliyuncs.com/upload/pic/dash.png'
    },
    {
        name: '红烧肉',
        type: 'HSR',
        icon: ' http://xinbfzx.oss-ap-southeast-1.aliyuncs.com/upload/pic/hsr.png'
    },
    {
        name: '泰达币',
        type: 'USDT',
        icon: 'http://xinbfzx.oss-ap-southeast-1.aliyuncs.com/upload/pic/usdt.png'
    },
    {
        name: '泰达币',
        type: 'USDT',
        icon: 'http://xinbfzx.oss-ap-southeast-1.aliyuncs.com/upload/pic/usdt.png'
    },
    {
        name: '泰达币',
        type: 'USDT',
        icon: 'http://xinbfzx.oss-ap-southeast-1.aliyuncs.com/upload/pic/usdt.png'
    },
    {
        name: '泰达币',
        type: 'USDT',
        icon: 'http://xinbfzx.oss-ap-southeast-1.aliyuncs.com/upload/pic/usdt.png'
    },
    {
        name: '泰达币',
        type: 'USDT',
        icon: 'http://xinbfzx.oss-ap-southeast-1.aliyuncs.com/upload/pic/usdt.png'
    },
    {
        name: '泰达币',
        type: 'USDT',
        icon: 'http://xinbfzx.oss-ap-southeast-1.aliyuncs.com/upload/pic/usdt.png'
    },
    {
        name: '泰达币',
        type: 'USDT',
        icon: 'http://xinbfzx.oss-ap-southeast-1.aliyuncs.com/upload/pic/usdt.png'
    },
    {
        name: '泰达币',
        type: 'USDT',
        icon: 'http://xinbfzx.oss-ap-southeast-1.aliyuncs.com/upload/pic/usdt.png'
    },
    {
        name: '泰达币',
        type: 'USDT',
        icon: 'http://xinbfzx.oss-ap-southeast-1.aliyuncs.com/upload/pic/usdt.png'
    },
    {
        name: '泰达币',
        type: 'USDT',
        icon: 'http://xinbfzx.oss-ap-southeast-1.aliyuncs.com/upload/pic/usdt.png'
    },{
        name: '泰达币',
        type: 'USDT',
        icon: 'http://xinbfzx.oss-ap-southeast-1.aliyuncs.com/upload/pic/usdt.png'
    },{
        name: '泰达币',
        type: 'USDT',
        icon: 'http://xinbfzx.oss-ap-southeast-1.aliyuncs.com/upload/pic/usdt.png'
    },{
        name: '泰达币',
        type: 'USDT',
        icon: 'http://xinbfzx.oss-ap-southeast-1.aliyuncs.com/upload/pic/usdt.png'
    },{
        name: '泰达币',
        type: 'USDT',
        icon: 'http://xinbfzx.oss-ap-southeast-1.aliyuncs.com/upload/pic/usdt.png'
    },{
        name: '泰达币',
        type: 'USDT',
        icon: 'http://xinbfzx.oss-ap-southeast-1.aliyuncs.com/upload/pic/usdt.png'
    },{
        name: '泰达币',
        type: 'USDT',
        icon: 'http://xinbfzx.oss-ap-southeast-1.aliyuncs.com/upload/pic/usdt.png'
    },
    {
        name: '马克币',
        type: 'OCT',
        icon: 'http://xinbfzx.oss-ap-southeast-1.aliyuncs.com/upload/pic/oct.png'
    }
]

function closest(el, selector) {
    const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
    while (el) {
        if (matchesSelector.call(el, selector)) {
            return el;
        }
        el = el.parentElement;
    }
    return null;
}

class addhall extends React.Component {
    constructor() {
        super();
        this.state = {
            showModal: false,
            checkedCoin: 0
        };
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    componentWillMount() {

    }

    showModal = key => (e) => {
        e.preventDefault(); // 修复 Android 上点击穿透
        this.setState({
            [key]: true,
        });
    }
    onClose = key => () => {
        this.setState({
            [key]: false,
        });
    }

    onWrapTouchStart = (e) => {
        // fix touch to scroll background page on iOS
        if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
            return;
        }
        const pNode = closest(e.target, '.am-modal-content');
        if (!pNode) {
            e.preventDefault();
        }
    }

    selectCion = (data) => {
        console.log(data)
    }

    render() {
        return (
            <div className="addhall">
                <NavBar
                    mode="dark"
                    leftContent={<Link className="nacBarLink" to="/">返回</Link>}
                >申请开放游戏</NavBar>
                <List onClick={this.showModal('showModal')} className="my-list">
                    <Item arrow="horizontal" extra={
                        <div className="select-icon-box">
                            <img src={data[this.state.checkedCoin].icon}/>&nbsp;&nbsp;
                            <span>{data[this.state.checkedCoin].name}</span>(<span>{data[this.state.checkedCoin].type}</span>)
                        </div>
                    }>选择币种：</Item>
                </List>
                <WingBlank size="lg">
                    <WhiteSpace size="lg" />
                    <div className="myCoinMsg">
                        <p>可用链家币：111111111</p>
                        <p>开放游戏费用：111111111</p>
                    </div>
                    <WhiteSpace size="lg" />
                    <div className="btn-box">
                        <span>余额不足?</span>
                        <a href="javascript:void(0);" className="assetsBtn">充值</a>
                        <Link to="/recharge" className="assetsBtn">兑换</Link>
                    </div>
                    <WhiteSpace size="lg" />
                    <WhiteSpace size="lg" />
                    <div className="btn-box">
                        <a onClick={() => {
                            alert('提示', '开通成功', [
                                { text: '确定'},
                            ])
                        }} href="javascript:void(0);" className="assetsBtn big">开通</a>
                    </div>
                    <WhiteSpace size="lg" />
                </WingBlank>
                <Modal className="popupList"
                    popup
                    visible={this.state.showModal}
                    onClose={this.onClose('showModal')}
                    animationType="slide-up"
                    wrapProps={{ onTouchStart: this.onWrapTouchStart }}
                >
                    <List renderHeader={() => <div className="big-title">选择币种</div>} className="popup-list">
                        {data.map((i, index) => (
                            <List.Item
                                onClick={() => {
                                    this.setState({
                                        showModal: false,
                                        checkedCoin: index,
                                    });
                                }}
                                key={index}>
                                <img src={i.icon}/> &nbsp;&nbsp;
                                <span>{i.name}</span>(<span>{i.type}</span>)
                            </List.Item>
                        ))}
                        <List.Item>
                        </List.Item>
                    </List>
                </Modal>
            </div>
        );
    }
}

export default addhall;
