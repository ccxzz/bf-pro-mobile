import React from 'react';
import { Carousel } from 'antd-mobile';
import './banner.less';

class banner extends React.Component {
    constructor() {
        super();
        this.state = {
            data: ['1', '2', '3'],
            imgHeight: 176,
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
        }, 100);
    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className="banner">
                <Carousel
                    autoplay={true}
                    infinite
                    // beforeChange={}
                    // afterChange={}
                >
                    {this.state.data.map(val => (
                        <a
                            key={val}
                            href="http://www.alipay.com"
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                            <img
                                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        </a>
                    ))}
                </Carousel>
            </div>
        );
    }
}

export default banner;