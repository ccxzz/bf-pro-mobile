import React from 'react';
import { Grid, WingBlank, WhiteSpace } from 'antd-mobile';
import { withRouter } from "react-router-dom";
import addCoin from './icon/add.png';

const data = [
    {
        icon: 'http://xinbfzx.oss-ap-southeast-1.aliyuncs.com/upload/pic/cpc.png',
        type: 'CPC',
        text: `CPC大厅`,
    },
    {
        icon: 'http://xinbfzx.oss-ap-southeast-1.aliyuncs.com/upload/pic/btc.png',
        type: 'BTC',
        text: `BTC大厅`,
    },
    {
        icon: 'http://xinbfzx.oss-ap-southeast-1.aliyuncs.com/upload/pic/dash.png',
        type: 'DASH',
        text: `DASH大厅`,
    },
    {
        icon: ' http://xinbfzx.oss-ap-southeast-1.aliyuncs.com/upload/pic/hsr.png',
        type: 'HSR',
        text: `HSR大厅`,
    },
    {
        icon: addCoin,
        text: `申请上线`,
    }
]

class playlistgrid extends React.Component {
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
            <div className="playlistgrid">
                <WingBlank size="lg">
                    <Grid data={data} onClick={data => {
                        if (data.type) {
                            this.props.history.push('/coinroom/' + data.type)
                        } else {
                            this.props.history.push('/addhall')
                        }
                    }} columnNum={3} />
                    <WhiteSpace size="lg" />
                </WingBlank>
            </div>
        );
    }
}

export default withRouter(playlistgrid);
