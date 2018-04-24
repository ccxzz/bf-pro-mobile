import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import BaseReducer from '../store/reducer/basereducer'

import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import FooterNav from '../components/footernav/footernav'
import Banner from '../components/banner/banner'
import PlayList from '../components/playlist/playlist'
import Assets from '../components/assets/assets'
import Account from '../components/account/account'
import Exception from '../components/exception/exception'
import Message from '../components/message/message'
import MessageContent from '../components/messagecontent/messagecontent'
import Login from '../components/login/login'

let store = createStore(BaseReducer);

class router extends React.Component {
    constructor() {
        super();
        this.state = {
            isLogin: false
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
                <Message/>
                <FooterNav data={{'selectMenu': 'message'}} />
            </div>
        );
        const MessageContentPage = () => (
            <div>
                <MessageContent/>
                <FooterNav data={{'selectMenu': 'message'}} />
            </div>
        );
        const KefuPage = () => (
            <div>
                <FooterNav data={{'selectMenu': 'kefu'}} />
            </div>
        );
        const ExceptionPage = () => (
            <div>
                <Exception />
                <FooterNav data={{'selectMenu': 'home'}} />
            </div>
        );
        const LoginPage = () => (
            <div>
                <Login />
            </div>
        );

        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Route path="/" render={() => (
                            this.state.isLogin ? (
                                <Switch>
                                    <Route path="/" exact component={IndexPage}/>
                                    <Route path="/recharge" component={RechargePage}/>
                                    <Route path="/account" component={AccountPage}/>
                                    <Route path="/message" component={MessagePage}/>
                                    <Route path="/kefu" component={KefuPage}/>
                                    <Route path="/message" component={MessagePage}/>
                                    <Route path="/messagecontent/:id" component={MessageContentPage}/>
                                    <Route path="/login" component={LoginPage}/>
                                    <Route component={ExceptionPage}/>
                                </Switch>
                            ) : (
                                <LoginPage />
                            )
                        )}/>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default router;
