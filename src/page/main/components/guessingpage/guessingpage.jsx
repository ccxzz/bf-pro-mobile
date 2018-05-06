import React from 'react';
import { WingBlank, WhiteSpace,  Flex, Button, List, Modal, InputItem } from 'antd-mobile';
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { createForm } from 'rc-form';
import Banner from '../banner/banner'
import kpl from  './icon/kpl.png'
import  './guessingpage.less';

const Item = List.Item;

class guessingpage extends React.Component {
    constructor() {
        super();
        this.state = {
            buyJc: false
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
                message: '请输入投入奖池金额',
            }],
        });
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

    render() {
        const CustomIcon = ({ type, className = '', size = 'md', ...restProps }) => {
            return  <svg className={`am-icon am-icon-${type.default.id} am-icon-${size} ${className}`}{...restProps}><use xlinkHref={'#'+type.default.id} /></svg>
        };
        const { getFieldError } = this.props.form;
        return (
            <div>
                <div className="guessingpage">
                    <Flex>
                        <Flex.Item>
                            <div className="big-text">比特币(BTC)</div>
                        </Flex.Item>
                        <Flex.Item>
                            <div className="pd-2">奖池金额 <Button type="default" size="small" onClick={this.showModal('buyJc')} className="buy-jc">购买</Button></div>
                            <div className="pd-2">123123123</div>
                        </Flex.Item>
                        <Flex.Item>
                            <div className="pd-2">加入奖池币量</div>
                            <div className="pd-2">221</div>
                        </Flex.Item>
                    </Flex>
                </div>
                <Banner />
                <div className="guessingpage bg-white">
                    <Flex className="pd-10">
                        <Flex.Item>
                            <div className="bigg-text">今日赛事</div>
                        </Flex.Item>
                    </Flex>
                    <WingBlank size="lg">
                        <WhiteSpace size="lg" />
                        <Flex className="guessList" onClick={() => {
                            this.props.history.push("/matchlist/football-CPC")
                        }}>
                            <Flex.Item>
                                <CustomIcon type={require('./icon/football.svg')} />
                            </Flex.Item>
                            <Flex.Item style={{flex:8}}>
                                <span className="bigg-text">足球</span>
                            </Flex.Item>
                        </Flex>
                        <WhiteSpace size="lg" />
                        <Flex className="guessList" onClick={() => {
                            this.props.history.push("/matchlist/basketball-CPC")
                        }}>
                            <Flex.Item>
                                <CustomIcon type={require('./icon/basketball.svg')} />
                            </Flex.Item>
                            <Flex.Item style={{flex:8}}>
                                <span className="bigg-text">篮球/美式足球</span>
                            </Flex.Item>
                        </Flex>
                        <WhiteSpace size="lg" />
                        <Flex className="guessList" onClick={() => {
                            this.props.history.push("/matchlist/kpl-CPC")
                        }}>
                            <Flex.Item>
                                <img style={{height: '22px'}} src={kpl} />
                            </Flex.Item>
                            <Flex.Item style={{flex:8}}>
                                <span className="bigg-text">王者荣耀</span>
                            </Flex.Item>
                        </Flex>
                        <WhiteSpace size="lg" />
                    </WingBlank>
                </div>
                <Modal
                    popup
                    className="buy-cj-modal"
                    visible={this.state.buyJc}
                    onClose={this.onClose('buyJc')}
                    animationType="slide-up"
                >
                    <List renderHeader={() => <div>投入CPC奖池</div>} className="popup-list">
                        <List.Item>
                            {this.numberDecorator(
                                <InputItem
                                    clear
                                    type="number"
                                    placeholder=""
                                ></InputItem>
                            )}
                            <div className={getFieldError('number')? 'tip-error' : ''} style={{ color: 'red', textAlign: 'left' }}>
                                {(getFieldError('number') || []).join(', ')}
                            </div>
                        </List.Item>
                        <List.Item>
                            <Button type="default" className="btn-ok" onClick={this.onClose('buyJc')}>确定</Button>
                        </List.Item>
                    </List>
                </Modal>
            </div>
        );
    }
}

export default withRouter(createForm()(guessingpage));
