import * as React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Dashboard } from './Dashboard';
import { Register } from './Register';
//import { Provider, connect } from 'react-redux';
//import store from '../../redux/store/Store';

export class Routes extends React.Component<any, any> {
    render() {
        return (
            //<Provider store={store}>
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route exact path="/register" component={Register} />
                </Switch>
            </HashRouter>
            //</Provider>
        )
    }
}