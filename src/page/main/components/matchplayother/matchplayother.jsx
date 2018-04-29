import React from 'react';
import { NavBar, Flex, WingBlank, WhiteSpace, Modal, List, InputItem, Button } from 'antd-mobile';
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { createForm } from 'rc-form';
import './matchplayother.less'

class matchplayother extends React.Component {
    constructor() {
        super();
        this.state = {
            timeLeft: 10,
            modalPopShow: false
        };
    }

    componentDidMount() {

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

    render() {
        const { getFieldError } = this.props.form;
        return (
            <div className="matchplayother">
                <NavBar
                    mode="dark"
                    leftContent={<Link className="nacBarLink" to="/matchplay/football-CPC-ycls">返回</Link>}
                >其他玩法</NavBar>
                <Flex className="flex-header">
                    <Flex.Item className="flex-item-left">
                        让球
                    </Flex.Item>
                </Flex>
                <div className="content-box">
                    <WingBlank size="sm">
                        <WhiteSpace size="sm" />
                        <Flex>
                            <Flex.Item className="">
                                <span className="color-bf">利物浦</span>
                            </Flex.Item>
                            <Flex.Item className="text-center">
                            </Flex.Item>
                            <Flex.Item className="text-center">
                            </Flex.Item>
                            <Flex.Item onClick={this.showModal('modalPopShow')} className="text-center flex-item-border">
                                <div>0.5&nbsp;/&nbsp;1</div>
                                <div className="color-red">1.12</div>
                            </Flex.Item>
                        </Flex>
                        <WhiteSpace size="sm" />
                        <Flex>
                            <Flex.Item className="">
                                <span className="color-bf">斯托克城</span>
                            </Flex.Item>
                            <Flex.Item className="text-center">
                            </Flex.Item>
                            <Flex.Item className="text-center">
                            </Flex.Item>
                            <Flex.Item onClick={this.showModal('modalPopShow')} className="text-center flex-item-border">
                                {/*<div>0.5</div>*/}
                                <div className="color-red line-height-40">1.12</div>
                            </Flex.Item>
                        </Flex>
                        <WhiteSpace size="sm" />
                    </WingBlank>
                </div>
                <Flex className="flex-header">
                    <Flex.Item className="flex-item-left">
                        让球&nbsp;<span className="color-bc">-&nbsp;上半场</span>
                    </Flex.Item>
                </Flex>
                <div className="content-box">
                    <WingBlank size="sm">
                        <WhiteSpace size="sm" />
                        <Flex>
                            <Flex.Item className="">
                                <span className="color-bf">利物浦</span>
                            </Flex.Item>
                            <Flex.Item className="text-center">
                            </Flex.Item>
                            <Flex.Item className="text-center">
                            </Flex.Item>
                            <Flex.Item onClick={this.showModal('modalPopShow')} className="text-center flex-item-border">
                                <div>0.5&nbsp;/&nbsp;1</div>
                                <div className="color-red">1.12</div>
                            </Flex.Item>
                        </Flex>
                        <WhiteSpace size="sm" />
                        <Flex>
                            <Flex.Item className="">
                                <span className="color-bf">斯托克城</span>
                            </Flex.Item>
                            <Flex.Item className="text-center">
                            </Flex.Item>
                            <Flex.Item className="text-center">
                            </Flex.Item>
                            <Flex.Item onClick={this.showModal('modalPopShow')} className="text-center flex-item-border">
                                {/*<div>0.5</div>*/}
                                <div className="color-red line-height-40">1.12</div>
                            </Flex.Item>
                        </Flex>
                        <WhiteSpace size="sm" />
                    </WingBlank>
                </div>
                <Flex className="flex-header">
                    <Flex.Item className="flex-item-left">
                        大&nbsp;/&nbsp;小
                    </Flex.Item>
                </Flex>
                <div className="content-box">
                    <WingBlank size="sm">
                        <WhiteSpace size="sm" />
                        <Flex>
                            <Flex.Item className="">
                                <span className="color-bf">大</span>
                            </Flex.Item>
                            <Flex.Item onClick={this.showModal('modalPopShow')} className="text-center flex-item-border">
                                <div>0.5&nbsp;/&nbsp;1</div>
                                <div className="color-red">1.12</div>
                            </Flex.Item>
                            <Flex.Item >
                                <span className="color-bf">小</span>
                            </Flex.Item>
                            <Flex.Item onClick={this.showModal('modalPopShow')} className="text-center flex-item-border">
                                <div>0.5&nbsp;/&nbsp;1</div>
                                <div className="color-red">1.12</div>
                            </Flex.Item>
                        </Flex>
                        <WhiteSpace size="sm" />
                        <Flex>
                            <Flex.Item className="">
                                <span className="color-bf">大</span>
                            </Flex.Item>
                            <Flex.Item onClick={this.showModal('modalPopShow')} className="text-center flex-item-border">
                                <div>0.5&nbsp;/&nbsp;1</div>
                                <div className="color-red">1.12</div>
                            </Flex.Item>
                            <Flex.Item>
                                小
                            </Flex.Item>
                            <Flex.Item onClick={this.showModal('modalPopShow')} className="text-center flex-item-border">
                                <div>1.5&nbsp;/&nbsp;1</div>
                                <div className="color-red">1.12</div>
                            </Flex.Item>
                        </Flex>
                        <WhiteSpace size="sm" />
                    </WingBlank>
                </div>
                <Flex className="flex-header">
                    <Flex.Item className="flex-item-left">
                        大&nbsp;/&nbsp;小&nbsp;<span className="color-bc">-&nbsp;上半场</span>
                    </Flex.Item>
                </Flex>
                <div className="content-box">
                    <WingBlank size="sm">
                        <WhiteSpace size="sm" />
                        <Flex>
                            <Flex.Item className="">
                                <span className="color-bf">大</span>
                            </Flex.Item>
                            <Flex.Item onClick={this.showModal('modalPopShow')} className="text-center flex-item-border">
                                <div>0.5&nbsp;/&nbsp;1</div>
                                <div className="color-red">1.12</div>
                            </Flex.Item>
                            <Flex.Item >
                                <span className="color-bf">小</span>
                            </Flex.Item>
                            <Flex.Item onClick={this.showModal('modalPopShow')} className="text-center flex-item-border">
                                <div>0.5&nbsp;/&nbsp;1</div>
                                <div className="color-red">1.12</div>
                            </Flex.Item>
                        </Flex>
                        <WhiteSpace size="sm" />
                        <Flex>
                            <Flex.Item className="">
                                <span className="color-bf">大</span>
                            </Flex.Item>
                            <Flex.Item onClick={this.showModal('modalPopShow')} className="text-center flex-item-border">
                                <div>0.5&nbsp;/&nbsp;1</div>
                                <div className="color-red">1.12</div>
                            </Flex.Item>
                            <Flex.Item>
                                小
                            </Flex.Item>
                            <Flex.Item onClick={this.showModal('modalPopShow')} className="text-center flex-item-border">
                                <div>1.5&nbsp;/&nbsp;1</div>
                                <div className="color-red">1.12</div>
                            </Flex.Item>
                        </Flex>
                        <WhiteSpace size="sm" />
                    </WingBlank>
                </div>
                <Modal
                    className="modal-pop"
                    popup
                    visible={this.state.modalPopShow}
                    onClose={this.onClose('modalPopShow')}
                    animationType="slide-up"
                >
                    <Flex className="modal-header">
                        <Flex.Item>
                            <div>交易单</div>
                            <div>0</div>
                        </Flex.Item>
                    </Flex>
                    <WingBlank size="lg">
                        <WhiteSpace size="lg" />
                        <div className="modal-con">
                            <Flex className="color-black">
                                <Flex.Item>
                                    <strong>足球&nbsp;大&nbsp;/&nbsp;小</strong>
                                </Flex.Item>
                            </Flex>
                            <Flex className="color-black">
                                <Flex.Item>
                                    意大利乙组联赛
                                </Flex.Item>
                            </Flex>
                            <Flex className="color-black">
                                <Flex.Item>
                                    利物浦&nbsp;v&nbsp;斯托克城
                                </Flex.Item>
                            </Flex>
                            <Flex>
                                <Flex.Item>
                                    <div className="text-line-dashed"></div>
                                </Flex.Item>
                            </Flex>
                            <Flex className="color-black">
                                <Flex.Item>
                                    <strong>小&nbsp;<span className="color-red">2&nbsp;/&nbsp;2.5</span>&nbsp;@&nbsp;<span className="color-red">0.96</span></strong>
                                </Flex.Item>
                            </Flex>
                            <div className="text-line-solid"></div>
                            <Flex className="">
                                <Flex.Item>
                                    <List>
                                        {this.numberDecorator(
                                            <InputItem
                                                clear
                                                type="number"
                                                placeholder=""
                                            ></InputItem>
                                        )}
                                    </List>
                                </Flex.Item>
                                <Flex.Item className="text-right">
                                    <div>单注最低：<strong>50</strong></div>
                                    <div>单注最高：<strong>54545</strong></div>
                                </Flex.Item>
                            </Flex>
                        </div>
                        <WhiteSpace size="lg" />
                        <div className="modal-con">
                            <Flex>
                                <Flex.Item className="flex-8">
                                    <strong>可赢金额：</strong>
                                </Flex.Item>
                                <Flex.Item>
                                    <strong className="color-green">50</strong>
                                </Flex.Item>
                            </Flex>
                        </div>
                        <WhiteSpace size="lg" />
                        <div className={getFieldError('number')? 'tip-error' : ''} style={{ color: 'red', textAlign: 'left' }}>
                            {(getFieldError('number') || []).join(', ')}
                        </div>
                        <WhiteSpace size="lg" />
                    </WingBlank>
                    <Flex className="modal-footer">
                        <Flex.Item>
                            <Button className="modal-submit" type="primary">
                                0.00&nbsp;/&nbsp;投注
                            </Button>
                        </Flex.Item>
                    </Flex>
                </Modal>
            </div>
        );
    }
}

export default withRouter(createForm()(matchplayother));
