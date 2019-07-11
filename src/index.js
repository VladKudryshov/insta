import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {Provider} from 'react-redux'
import {browserHistory, IndexRoute, Route, Router} from "react-router";
import Root from "./components/basic/root/Root";
import HomeComponent from "./components/basic/HomeComponent";
import ProfileComponent from "./components/basic/account/ProfileComponent";
import RootAccount from "./components/basic/root/RootAccount";
import OrderStepperContainer from "./containers/OrderStepperContainer";
import OrderCard from "./containers/OrderCardContainer";
import RootOrders from "./components/basic/root/RootOrders";
import configureStore from "./configureStore";
import CatalogContainer from "./containers/CatalogContainer";
import LoginComponent from "./components/basic/LoginComponent";
import BlogComponent from "./components/basic/BlogComponent";
import MessagesComponent from "./components/basic/account/MessagesComponent";
import BlogContainer from "./containers/BlogContainer";

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Root} >
                <IndexRoute component={HomeComponent} />
                <Route path="login" component={LoginComponent} />
                <Route path="blog" component={BlogContainer} />
                <Router path="/catalog">
                    <IndexRoute component={CatalogContainer}/>
                </Router>
                <Route path="/basket" component={OrderStepperContainer}/>
                <Router path="/account" component={RootAccount}>
                    <IndexRoute component={ProfileComponent}/>
                    <Router path="messages" component={MessagesComponent}/>
                </Router>
                <Router path="/orders" component={RootOrders}>
                    <Route path=":id" component={OrderCard}/>
                </Router>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
