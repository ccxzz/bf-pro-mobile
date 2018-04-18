import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import BaseReducer from '../store/reducer/basereducer'

import { HashRouter as Router, Route, Switch } from "react-router-dom";

import FooterNav from '../components/footernav/footernav'

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
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Switch>
                            <Route path="/" exact component={FooterNav}/>
                        </Switch>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default router;