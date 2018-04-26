import React from 'react';
import { WhiteSpace, WingBlank, NavBar, Card, Flex, Button, Modal, List, InputItem } from 'antd-mobile';
import { Link } from "react-router-dom";
import { createForm } from 'rc-form';
import './coinexchange.less'

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

class coinexchange extends React.Component {
    constructor() {
        super();
        this.state = {
            showModalPass: false
        };
    }

    componentDidMount() {

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

    componentWillUnmount() {

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
            <div className="coinexchange">
                <NavBar
                    mode="dark"
                    leftContent={<Link className="nacBarLink" to="/">返回</Link>}
                >兑换</NavBar>
                <WingBlank size="lg">
                    <WhiteSpace size="lg" />
                    <Card>
                        <Card.Header
                            title="比特币 (BTC)"
                            thumb={<img className='coin-icon' src="http://xinbfzx.oss-ap-southeast-1.aliyuncs.com/upload/pic/btc.png"/>}
                            extra={<span></span>}
                        />
                        <Card.Body>
                            <div>
                                <Flex>
                                    <Flex.Item>
                                        兑换比例：3000
                                    </Flex.Item>
                                    <Flex.Item>
                                        可用： 1000
                                    </Flex.Item>
                                </Flex>
                            </div>
                        </Card.Body>
                        <Card.Footer content="" extra={<div>
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
                    title="兑换BTC"
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
                                    placeholder="输入购买数量"
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

export default createForm()(coinexchange);
