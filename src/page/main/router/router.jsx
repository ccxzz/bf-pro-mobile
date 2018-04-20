import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import BaseReducer from '../store/reducer/basereducer'

import { HashRouter as Router, Route, Switch } from "react-router-dom";

import FooterNav from '../components/footernav/footernav'
import Banner from '../components/banner/banner'
import PlayList from '../components/playlist/playlist'
import Assets from '../components/assets/assets'
import Account from '../components/account/account'

let store = createStore(BaseReducer);

class router extends React.Component {
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
        const IndexPage = () => (
            <div>
                <Banner/>
                <PlayList/>
                <FooterNav data={{'selectMenu': 'home'}} />
            </div>
        );
        const RechargePage = () => (
            <div>
                <Assets />
                <FooterNav data={{'selectMenu': 'recharge'}} />
            </div>
        );
        const AccountPage = () => (
            <div>
                <Account/>
                <FooterNav data={{'selectMenu': 'account'}} />
            </div>
        );
        const MessagePage = () => (
            <div>
                <FooterNav data={{'selectMenu': 'message'}} />
            </div>
        );
        const KefuPage = () => (
            <div>
                <FooterNav data={{'selectMenu': 'kefu'}} />
            </div>
        );
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Switch>
                            <Route path="/" exact component={IndexPage}/>
                            <Route path="/recharge" component={RechargePage}/>
                            <Route path="/account" component={AccountPage}/>
                            <Route path="/message" component={MessagePage}/>
                            <Route path="/kefu" component={KefuPage}/>
                        </Switch>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default router;