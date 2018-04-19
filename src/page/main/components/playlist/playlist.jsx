import React from 'react';
import AccountMsg from './accountmsg'
import PlayListGrid from './playlistgrid'
import './playlist.less';

class playlist extends React.Component {
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
            <div className="playlist">
                <AccountMsg />
                <PlayListGrid />
            </div>
        );
    }
}

export default playlist;