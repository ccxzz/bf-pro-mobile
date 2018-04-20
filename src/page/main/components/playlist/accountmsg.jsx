import React from 'react';
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';

class accountmsg extends React.Component {
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
            <div className="accountmsg">
                <WingBlank size="lg">
                    <WhiteSpace size="lg" />
                    <Card>
                        <Card.Header
                            title="1283883111"
                            thumb={<CustomIcon type={require('./icon/account-circle.svg')} />}
                            extra={<span></span>}
                        />
                        <Card.Body>
                            <div>账户信息.......</div>
                        </Card.Body>
                        <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
                    </Card>
                    <WhiteSpace size="lg" />
                </WingBlank>
            </div>
        );
    }
}

export default accountmsg;