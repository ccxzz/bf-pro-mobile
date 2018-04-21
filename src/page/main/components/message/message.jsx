import React from 'react';
import { WhiteSpace, WingBlank, NavBar, Card, Button } from 'antd-mobile';
import { Link } from "react-router-dom";
import './message.less'

class message extends React.Component {
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
            <div className="message">
                <NavBar
                    mode="dark"
                    // leftContent={<Link className="nacBarLink" to="/message">返回</Link>}
                    // rightContent={[
                    //     <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    //     <Icon key="1" type="ellipsis" />,
                    // ]}
                >消息</NavBar>
                <WhiteSpace size="lg" />
                <Card full>
                    <Card.Header
                        title="消息标题"
                        // thumb="https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png"
                        extra={<span>2018-4-21 10:00:00</span>}
                    />
                    <Card.Body>
                        <p>还撒谎的哈师大还撒谎的哈师大还撒谎的哈师大还撒谎的哈师大还撒谎的哈师大还撒
                            谎的哈师大还撒谎的哈师大还撒谎的哈师大还撒谎的哈师大还撒谎的哈师大还撒
                            谎的哈师大还撒谎的哈师大</p>
                    </Card.Body>
                    <Card.Footer content="" extra={<div>
                        <Link className="toMessagePage" to="/messagecontent/12">
                            查看
                        </Link>
                    </div>} />
                </Card>
                <WhiteSpace size="lg" />
                <Card full>
                    <Card.Header
                        title="消息标题"
                        // thumb="https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png"
                        extra={<span>2018-4-21 10:00:00</span>}
                    />
                    <Card.Body>
                        <p>还撒谎的哈师大还撒谎的哈师大还撒谎的哈师大还撒谎的哈师大还撒谎的哈师大还撒
                            谎的哈师大还撒谎的哈师大还撒谎的哈师大还撒谎的哈师大还撒谎的哈师大还撒
                            谎的哈师大还撒谎的哈师大</p>
                    </Card.Body>
                    <Card.Footer content="" extra={<div>
                        <Link className="toMessagePage" to="/messagecontent/12">
                            查看
                        </Link>
                    </div>} />
                </Card>
                <WhiteSpace size="lg" />
                <Card full>
                    <Card.Header
                        title="消息标题"
                        // thumb="https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png"
                        extra={<span>2018-4-21 10:00:00</span>}
                    />
                    <Card.Body>
                        <p>还撒谎的哈师大还撒谎的哈师大还撒谎的哈师大还撒谎的哈师大还撒谎的哈师大还撒
                            谎的哈师大还撒谎的哈师大还撒谎的哈师大还撒谎的哈师大还撒谎的哈师大还撒
                            谎的哈师大还撒谎的哈师大</p>
                    </Card.Body>
                    <Card.Footer content="" extra={<div>
                        <Link className="toMessagePage" to="/messagecontent/12">
                            查看
                        </Link>
                    </div>} />
                </Card>
                <WhiteSpace size="lg" />
                <Card full>
                    <Card.Header
                        title="消息标题"
                        // thumb="https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png"
                        extra={<span>2018-4-21 10:00:00</span>}
                    />
                    <Card.Body>
                        <p>还撒谎的哈师大还撒谎的哈师大还撒谎的哈师大还撒谎的哈师大还撒谎的哈师大还撒
                            谎的哈师大还撒谎的哈师大还撒谎的哈师大还撒谎的哈师大还撒谎的哈师大还撒
                            谎的哈师大还撒谎的哈师大</p>
                    </Card.Body>
                    <Card.Footer content="" extra={<div>
                        <Link className="toMessagePage" to="/messagecontent/12">
                            查看
                        </Link>
                    </div>} />
                </Card>
                <WhiteSpace size="lg" />
                <Card full>
                    <Card.Header
                        title="消息标题"
                        // thumb="https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png"
                        extra={<span>2018-4-21 10:00:00</span>}
                    />
                    <Card.Body>
                        <p>还撒谎的哈师大还撒谎的哈师大还撒谎的哈师大还撒谎的哈师大还撒谎的哈师大还撒
                            谎的哈师大还撒谎的哈师大还撒谎的哈师大还撒谎的哈师大还撒谎的哈师大还撒
                            谎的哈师大还撒谎的哈师大</p>
                    </Card.Body>
                    <Card.Footer content="" extra={<div>
                        <Link className="toMessagePage" to="/messagecontent/12">
                            查看
                        </Link>
                    </div>} />
                </Card>
                <WhiteSpace size="lg" />
                <Card full>
                    <Card.Header
                        title="消息标题"
                        // thumb="https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png"
                        extra={<span>2018-4-21 10:00:00</span>}
                    />
                    <Card.Body>
                        <p>还撒谎的哈师大还撒谎的哈师大还撒谎的哈师大还撒谎的哈师大还撒谎的哈师大还撒
                            谎的哈师大还撒谎的哈师大还撒谎的哈师大还撒谎的哈师大还撒谎的哈师大还撒
                            谎的哈师大还撒谎的哈师大</p>
                    </Card.Body>
                    <Card.Footer content="" extra={<div>
                        <Link className="toMessagePage" to="/messagecontent/12">
                            查看
                        </Link>
                    </div>} />
                </Card>
                <WhiteSpace size="lg" />
            </div>
        );
    }
}

export default message;