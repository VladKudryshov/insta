import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {Provider} from 'react-redux'
import {browserHistory, IndexRoute, Route, Router} from "react-router";
import Root from "./components/root/Root";
import HomeComponent from "./components/HomeComponent";
import ProfileComponent from "./components/account/ProfileComponent";
import RootAccount from "./components/root/RootAccount";
import OrderStepperContainer from "./containers/OrderStepperContainer";
import OrderCard from "./containers/OrderCardContainer";
import RootOrders from "./components/root/RootOrders";
import configureStore from "./configureStore";
import CatalogContainer from "./containers/CatalogContainer";

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Root}>
                <IndexRoute component={HomeComponent}/>
                <Router path="/catalog">
                    <IndexRoute component={CatalogContainer}/>
                </Router>
                <Route path="/basket" component={OrderStepperContainer}/>
                <Router path="/account" component={RootAccount}>
                    <IndexRoute component={ProfileComponent}/>
                </Router>
                <Router path="/orders" component={RootOrders}>
                    <Route path=":id" component={OrderCard}/>
                </Router>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
