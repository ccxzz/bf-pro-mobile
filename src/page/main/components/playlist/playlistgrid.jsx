import React from 'react';
import { Grid, WingBlank, WhiteSpace } from 'antd-mobile';
import addCoin from './icon/add.png';

const data = [
    {
        icon: 'http://xinbfzx.oss-ap-southeast-1.aliyuncs.com/upload/pic/cpc.png',
        text: `CPC大厅`,
    },
    {
        icon: 'http://xinbfzx.oss-ap-southeast-1.aliyuncs.com/upload/pic/btc.png',
        text: `BTC大厅`,
    },
    {
        icon: 'http://xinbfzx.oss-ap-southeast-1.aliyuncs.com/upload/pic/dash.png',
        text: `DASH大厅`,
    },
    {
        icon: ' http://xinbfzx.oss-ap-southeast-1.aliyuncs.com/upload/pic/hsr.png',
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
                    <Grid data={data} columnNum={3} />
                    <WhiteSpace size="lg" />
                </WingBlank>
            </div>
        );
    }
}

export default playlistgrid;
