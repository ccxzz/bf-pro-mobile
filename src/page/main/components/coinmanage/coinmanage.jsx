import React from 'react';
import { List, NavBar, WingBlank, WhiteSpace, Button, Modal, Switch } from 'antd-mobile';
import { Link } from "react-router-dom";
import { createForm } from 'rc-form';
import './coinmanage.less'

const alert = Modal.alert;
const Item = List.Item;

class coinmanage extends React.Component {
    constructor() {
        super();
        this.state = {
        };
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    saveCoinManage = () => {
        this.props.form.validateFields((error, value) => {
            console.log(value)
        })
        alert('提示', '保存成功', [
            { text: '确定'},
        ])
    }
    render() {
        const { getFieldProps } = this.props.form;
        return (
            <div className="coinmanage">
                <NavBar
                    mode="dark"
                    leftContent={<Link className="nacBarLink" to="/recharge">返回</Link>}
                >钱包管理</NavBar>
                <WhiteSpace size="lg" />
                <List className="my-list pd-5">
                    <Item
                        thumb={<img src="http://xinbfzx.oss-ap-southeast-1.aliyuncs.com/upload/pic/btc.png" />}
                        extra={<Switch
                            {...getFieldProps('Switch1', {
                                initialValue: true,
                                valuePropName: 'checked',
                            })}
                            onClick={(checked) => { console.log(checked); }}
                        />}>
                        比特币 (BTC)
                    </Item>
                    <Item
                        thumb={<img src="http://xinbfzx.oss-ap-southeast-1.aliyuncs.com/upload/pic/btc.png" />}
                        extra={<Switch
                            {...getFieldProps('Switch2', {
                                initialValue: true,
                                valuePropName: 'checked',
                            })}
                            onClick={(checked) => { console.log(checked); }}
                        />}>
                        比特币 (BTC)
                    </Item>
                    <Item
                        thumb={<img src="http://xinbfzx.oss-ap-southeast-1.aliyuncs.com/upload/pic/btc.png" />}
                        extra={<Switch
                            {...getFieldProps('Switch3', {
                                initialValue: true,
                                valuePropName: 'checked',
                            })}
                            onClick={(checked) => { console.log(checked); }}
                        />}>
                        比特币 (BTC)
                    </Item>
                    <Item
                        thumb={<img src="http://xinbfzx.oss-ap-southeast-1.aliyuncs.com/upload/pic/btc.png" />}
                        extra={<Switch
                            {...getFieldProps('Switch4', {
                                initialValue: true,
                                valuePropName: 'checked',
                            })}
                            onClick={(checked) => { console.log(checked); }}
                        />}>
                        比特币 (BTC)
                    </Item>
                    <Item
                        thumb={<img src="http://xinbfzx.oss-ap-southeast-1.aliyuncs.com/upload/pic/btc.png" />}
                        extra={<Switch
                            {...getFieldProps('Switch5', {
                                initialValue: true,
                                valuePropName: 'checked',
                            })}
                            onClick={(checked) => { console.log(checked); }}
                        />}>
                        比特币 (BTC)
                    </Item>
                    <Item
                        thumb={<img src="http://xinbfzx.oss-ap-southeast-1.aliyuncs.com/upload/pic/btc.png" />}
                        extra={<Switch
                            {...getFieldProps('Switch6', {
                                initialValue: true,
                                valuePropName: 'checked',
                            })}
                            onClick={(checked) => { console.log(checked); }}
                        />}>
                        比特币 (BTC)
                    </Item>
                </List>
                <WhiteSpace size="lg" />
                <WingBlank>
                    <Button onClick={this.saveCoinManage} type="primary">保存</Button>
                </WingBlank>
            </div>
        );
    }
}

export default createForm()(coinmanage);
