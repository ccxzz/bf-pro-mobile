import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import BaseReducer from '../store/reducer/basereducer'

import { HashRouter as Router, Route, Switch } from "react-router-dom";

import FooterNav from '../components/footernav/footernav'
import FooterGuess from '../components/footerguess/footerguess'
import Banner from '../components/banner/banner'
import PlayList from '../components/playlist/playlist'
import Assets from '../components/assets/assets'
import Account from '../components/account/account'
import Exception from '../components/exception/exception'
import Message from '../components/message/message'
import MessageContent from '../components/messagecontent/messagecontent'
import Login from '../components/login/login'
import ForgotPass from '../components/forgotpass/forgotpass'
import Register from '../components/register/register'
import CoinExchange from '../components/coinexchange/coinexchange'
import CoinRoom from '../components/coinroom/coinroom'
import AddHall from '../components/addhall/addhall'
import CoinManage from '../components/coinmanage/coinmanage'
import Invitation from '../components/invitation/invitation'
import HallManage from '../components/hallmanage/hallmanage'
import GuessingPage from '../components/guessingpage/guessingpage'
import AccountHistory from '../components/accounthistory/accounthistory'
import TradeDetail from '../components/tradedetail/tradedetail'

let store = createStore(BaseReducer);

class router extends React.Component {
    constructor() {
        super();
        this.state = {
            isLogin: store.getState().loginreducer.isLogin
        };
    }

    componentDidMount() {
        let self = this;
        store.subscribe(function () {
            let stateArr = store.getState();
            self.state.isLogin = stateArr.loginreducer.isLogin;
        });
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
        const AddHallPage = () => (
            <div>
                <AddHall />
                <FooterNav data={{'selectMenu': ''}} />
            </div>
        );

        const CoinExchangePage = () => (
            <div>
                <CoinExchange />
                <FooterNav data={{'selectMenu': 'home'}} />
            </div>
        );
        const CoinManagePage = () => (
            <div>
                <CoinManage />
                <FooterNav data={{'selectMenu': ''}} />
            </div>
        );
        const HallManagePage = () => (
            <div>
                <HallManage />
                <FooterNav data={{'selectMenu': ''}} />
            </div>
        );
        const InvitationPage = () => (
            <div>
                <Invitation />
                <FooterNav data={{'selectMenu': ''}} />
            </div>
        );
        const CoinRoomPage = () => (
            <div>
                <Banner/>
                <CoinRoom />
                <FooterNav data={{'selectMenu': ''}} />
            </div>
        );
        const LoginPage = () => (
            <div>
                <Login />
            </div>
        );
        const ForgotPassPage = () => (
            <div>
                <ForgotPass />
            </div>
        );
        const RegisterPage = () => (
            <div>
                <Register />
            </div>
        );

        const guessingcompetitionPage = () => (
            <div>
                <GuessingPage />
                <FooterGuess  data={{'selectMenu': ''}}/>
            </div>
        );
        const AccountHistoryPage = () => (
            <div>
                <AccountHistory />
                <FooterGuess  data={{'selectMenu': 'accounthistory'}}/>
            </div>
        );
        const TradeDetailPage = () => (
            <div>
                <TradeDetail />
                <FooterGuess  data={{'selectMenu': 'tradedetail'}}/>
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
                                    <Route path="/coinroom/:id" component={CoinRoomPage}/>
                                    <Route path="/addhall" component={AddHallPage}/>
                                    <Route path="/coinmanage" component={CoinManagePage}/>
                                    <Route path="/invitation" component={InvitationPage}/>
                                    <Route path="/hallmanage" component={HallManagePage}/>
                                    <Route path="/accounthistory" component={AccountHistoryPage}/>
                                    <Route path="/tradedetail" component={TradeDetailPage}/>
                                    <Route path="/messagecontent/:id" component={MessageContentPage}/>
                                    <Route path="/login" component={LoginPage}/>
                                    <Route path="/forgotpass" component={ForgotPassPage}/>
                                    <Route path="/register" component={RegisterPage}/>
                                    <Route path="/guessingcompetition/:id" component={guessingcompetitionPage}/>
                                    <Route component={ExceptionPage}/>
                                </Switch>
                            ) : (
                                <Switch>
                                    <Route path="/" exact component={LoginPage}/>
                                    <Route path="/login" component={LoginPage}/>
                                    <Route path="/forgotpass" component={ForgotPassPage}/>
                                    <Route path="/register" component={RegisterPage}/>
                                    <Route component={LoginPage}/>
                                </Switch>
                            )
                        )}/>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default router;
