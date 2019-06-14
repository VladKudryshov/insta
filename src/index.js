import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {Provider} from 'react-redux'
import {createStore} from 'redux'
import rootReducer from './reducers'
import {browserHistory, IndexRoute, Route, Router} from "react-router";
import Root from "./components/root/Root";
import HomeComponent from "./components/HomeComponent";
import CatalogComponent from "./components/CatalogComponent";
import ProfileComponent from "./components/account/ProfileComponent";
import RootAccount from "./components/root/RootAccount";
import OrdersComponent from "./components/account/OrdersComponent";
import OrderStepperContainer from "./containers/OrderStepperContainer";
import OrderCardComponent from "./components/account/OrderCardComponent";
import CardProductComponent from "./components/catalog/CardProductComponent";
import RootOrders from "./components/root/RootOrders";

const store = createStore(rootReducer)


ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Root}>
                <IndexRoute component={HomeComponent}/>
                <Router path="/catalog">
                    <IndexRoute component={CatalogComponent}/>
                </Router>
                <Route path="/basket" component={OrderStepperContainer}/>
                <Router path="/account" component={RootAccount}>
                    <Route path="/account/profile" component={ProfileComponent}/>
                    <Router path="/account/orders" component={RootOrders}>
                        <Route path=":id" component={OrderCardComponent}/>
                    </Router>
                </Router>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
