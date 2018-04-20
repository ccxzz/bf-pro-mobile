import React from 'react';
import { Grid, WingBlank, WhiteSpace } from 'antd-mobile';

const data = Array.from(new Array(9)).map((_val, i) => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    text: `name${i}`,
}));

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