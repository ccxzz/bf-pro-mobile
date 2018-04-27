import React from 'react';
import { List, NavBar, WingBlank, WhiteSpace, Modal, Button, Flex } from 'antd-mobile';
import { Link } from "react-router-dom";
import './hallmanage.less';

const Item = List.Item;
const alert = Modal.alert;

class hallmanage extends React.Component {
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
        return (
            <div className="hallmanage">
                <NavBar
                    mode="dark"
                    leftContent={<Link className="nacBarLink" to="/account">返回</Link>}
                >厅主管理</NavBar>
                <Flex style={{marginBottom: '0', borderBottom: '1px solid gray'}}>
                    <Flex.Item>
                        <p>大厅</p>
                    </Flex.Item>
                    <Flex.Item className="text-right">
                        <p>到期时间</p>
                    </Flex.Item>
                    <Flex.Item className="text-right">
                        <p></p>
                    </Flex.Item>
                </Flex>
                <Flex>
                    <Flex.Item>
                        <p>CPC大厅</p>
                    </Flex.Item>
                    <Flex.Item className="text-right">
                        <p>2018-4-28</p>
                    </Flex.Item>
                    <Flex.Item className="text-right">
                        <Button onClick={ () => {
                            alert('提示', '续费成功', [
                                { text: '确定'},
                            ])
                        }} type="default" size="small" inline>续费</Button>
                    </Flex.Item>
                </Flex>
                <Flex>
                    <Flex.Item>
                        <p>CPC大厅</p>
                    </Flex.Item>
                    <Flex.Item className="text-right">
                        <p>2018-4-28</p>
                    </Flex.Item>
                    <Flex.Item className="text-right">
                        <Button onClick={ () => {
                            alert('提示', '续费成功', [
                                { text: '确定'},
                            ])
                        }} type="default" size="small" inline>续费</Button>
                    </Flex.Item>
                </Flex>
                <WhiteSpace size="lg" />
                <WhiteSpace size="lg" />
                <Flex style={{marginBottom: '0', borderBottom: '1px solid gray'}}>
                    <Flex.Item>
                        <p>币种</p>
                    </Flex.Item>
                    <Flex.Item className="text-right">
                        <p>佣金</p>
                    </Flex.Item>
                    <Flex.Item className="text-right">
                        <p></p>
                    </Flex.Item>
                </Flex>
                <Flex>
                    <Flex.Item>
                        <p>CPC</p>
                    </Flex.Item>
                    <Flex.Item className="text-right">
                        <p>100</p>
                    </Flex.Item>
                    <Flex.Item className="text-right">
                        <Button onClick={ () => {
                            alert('提示', '领取成功', [
                                { text: '确定'},
                            ])
                        }} type="default" size="small" inline>领取</Button>
                    </Flex.Item>
                </Flex>
                <Flex>
                    <Flex.Item>
                        <p>CPC</p>
                    </Flex.Item>
                    <Flex.Item className="text-right">
                        <p>100</p>
                    </Flex.Item>
                    <Flex.Item className="text-right">
                        <Button onClick={ () => {
                            alert('提示', '领取成功', [
                                { text: '确定'},
                            ])
                        }} type="default" size="small" inline>领取</Button>
                    </Flex.Item>
                </Flex>
            </div>
        );
    }
}

export default hallmanage;
