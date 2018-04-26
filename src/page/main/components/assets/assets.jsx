import React from 'react';
import { Card, WingBlank, WhiteSpace, Button, NavBar, Modal, List, InputItem } from 'antd-mobile';
import { createForm } from 'rc-form';
import './assets.less'

const alert = Modal.alert;

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


class assets extends React.Component {
    constructor() {
        super();
        this.state = {
            showModalPass: false
        };
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    componentWillMount() {
        this.numberDecorator = this.props.form.getFieldDecorator('number', {
            initialValue: '',
            rules: [{
                required: true,
                message: '请输入兑换数量',
            }],
        });
    }
    exchangeCoin = () => {
        this.setState({
            showModalPass: true,
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


    render() {
        const { getFieldError } = this.props.form;
        return (
            <div className="assets">
                <NavBar
                    mode="dark"
                    // leftContent="Back"
                    // rightContent={[
                    //     <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    //     <Icon key="1" type="ellipsis" />,
                    // ]}
                >资产</NavBar>
                <WingBlank size="lg">
                    <WhiteSpace size="lg" />
                    <Card>
                        <Card.Header
                            title={<strong className="strongName">石油链 &nbsp;<span className="littleName">PCC</span></strong>}
                            extra={<img className="coinImg" src="http://xinbfzx.oss-ap-southeast-1.aliyuncs.com/upload/pic/btc.png" />}
                        />
                        <Card.Body>
                            <p>数量：1213123123123</p>
                            <p>可用：<span>2.0000000</span>&nbsp;&nbsp;&nbsp; 锁定：<span>21.231211</span></p>
                            <p>兑换比例：1213123123123</p>
                        </Card.Body>
                        <Card.Footer content="" extra={<div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <Button className="assetsBtn">充值</Button>
                            <Button className="assetsBtn">提现</Button>
                            <Button className="assetsBtn">交易</Button>
                            <Button onClick={this.exchangeCoin} className="assetsBtn">兑换</Button>
                        </div>} />
                    </Card>
                    <WhiteSpace size="lg" />
                    <Card>
                        <Card.Header
                            title={<strong className="strongName">石油链 &nbsp;<span className="littleName">PCC</span></strong>}
                            extra={<img className="coinImg" src="http://xinbfzx.oss-ap-southeast-1.aliyuncs.com/upload/pic/btc.png" />}
                        />
                        <Card.Body>
                            <p>数量：1213123123123</p>
                            <p>可用：<span>2.0000000</span>&nbsp;&nbsp;&nbsp; 锁定：<span>21.231211</span></p>
                            <p>兑换比例：1213123123123</p>
                        </Card.Body>
                        <Card.Footer content="" extra={<div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <Button className="assetsBtn">充值</Button>
                            <Button className="assetsBtn">提现</Button>
                            <Button className="assetsBtn">交易</Button>
                            <Button onClick={this.exchangeCoin} className="assetsBtn">兑换</Button>
                        </div>} />
                    </Card>
                    <WhiteSpace size="lg" />
                    <Card>
                    <Card.Header
                        title={<strong className="strongName">石油链 &nbsp;<span className="littleName">PCC</span></strong>}
                        extra={<img className="coinImg" src="http://xinbfzx.oss-ap-southeast-1.aliyuncs.com/upload/pic/btc.png" />}
                    />
                    <Card.Body>
                        <p>数量：1213123123123</p>
                        <p>可用：<span>2.0000000</span>&nbsp;&nbsp;&nbsp; 锁定：<span>21.231211</span></p>
                        <p>兑换比例：1213123123123</p>
                    </Card.Body>
                    <Card.Footer content="" extra={<div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <Button className="assetsBtn">充值</Button>
                        <Button className="assetsBtn">提现</Button>
                        <Button className="assetsBtn">交易</Button>
                        <Button onClick={this.exchangeCoin} className="assetsBtn">兑换</Button>
                    </div>} />
                </Card>
                    <WhiteSpace size="lg" />
                </WingBlank>
                <Modal className="exchangeModal"
                       visible={this.state.showModalPass}
                       transparent
                       maskClosable={false}
                       onClose={this.onClose('showModalPass')}
                       title="兑换"
                       footer={[{text: '取消',onPress: () => {
                               this.onClose('showModalPass')();
                           } },{ text: '确定', onPress: () => {
                               this.props.form.validateFields((error, value) => {
                                   if (!error) {
                                       alert('提示', '兑换成功', [
                                           { text: '确定'},
                                       ])
                                       this.onClose('showModalPass')();
                                   }
                               });
                           } }]}
                       wrapProps={{ onTouchStart: this.onWrapTouchStart }}
                >
                    <div style={{ wordBreak: 'break-all'}}>
                        <List>
                            {this.numberDecorator(
                                <InputItem
                                    clear
                                    type="number"
                                    placeholder="输入兑换数量"
                                ></InputItem>
                            )}
                            <div style={{ color: 'red', textAlign: 'left' }}>
                                {(getFieldError('number') || []).join(', ')}
                            </div>
                        </List>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default createForm()(assets);
