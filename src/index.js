import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {Provider} from 'react-redux'
import {browserHistory, IndexRoute, Route, Router} from "react-router";
import Root from "./components/basic/root/Root";
import HomeComponent from "./components/basic/home/Home";
import ProfileComponent from "./components/basic/account/ProfileComponent";
import RootAccount from "./components/basic/root/RootAccount";
import OrderStepperContainer from "./containers/order/OrderStepperContainer";
import OrderCard from "./containers/order/OrderCardContainer";
import RootOrders from "./components/basic/root/RootOrders";
import configureStore from "./configureStore";
import CatalogContainer from "./containers/products/CatalogContainer";
import LoginComponent from "./components/basic/LoginComponent";
import MessagesComponent from "./components/basic/account/MessagesComponent";
import BlogContainer from "./containers/blog/BlogContainer";
import PostContainer from "./containers/blog/PostContainer";
import AddressesComponent from "./containers/address/AddressListContainer";
import RootPanel from "./components/admin/root/RootPanel";
import AdminPanelProductsComponent from "./components/admin/AdminPanelProductsComponent";
import AdminStockProductsComponent from "./components/admin/AdminStockProductsComponent";
import AdminEmployeesComponent from "./components/admin/AdminEmployeesComponent";
import AdminOrdersProductsComponent from "./components/admin/AdminOrdersProductsComponent";
import AdminPanelProductComponent from "./components/admin/AdminPanelProductComponent";
import AdminPanelBlogComponent from "./components/admin/AdminPanelBlogComponent";
import ProductContainer from "./containers/products/ProductContainer";
import AdminPanelUsersComponent from "./components/admin/AdminPanelUsersComponent";
import * as auth from "./utils/auth";
import ChatComponent from "./components/basic/ChatComponent";
import AdminPanelPostComponent from "./components/admin/AdminPanelPostComponent";
import NotFound from "./components/NotFound";

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route component={NotFound}/>
            <Route path="/" component={Root}>
                <IndexRoute component={HomeComponent}/>
                <Route path="login" component={LoginComponent}/>
                <Route path="blog">
                    <IndexRoute component={BlogContainer}/>
                    <Route path=":id" component={PostContainer}/>
                </Route>
                <Route path="products">
                    <IndexRoute component={CatalogContainer}/>
                    <Route path=":id" component={ProductContainer}/>
                </Route>
                <Route path="basket" component={OrderStepperContainer}/>
                <Route path="chat" component={ChatComponent}/>
                <Route path="account" component={RootAccount} onEnter={auth.notAuth}>
                    <Route path="profile" component={ProfileComponent}/>
                    <Route path="messages" component={MessagesComponent}/>
                    <Route path="address" component={AddressesComponent}/>
                </Route>
                <Route path="orders" component={RootOrders} onEnter={auth.notAuth}>
                    <Route path=":id" component={OrderCard}/>
                </Route>
            </Route>
            <Router path="/admin" component={RootPanel} onEnter={auth.checkIsAdmin}>
                <Route path="products" component={AdminPanelProductsComponent}/>
                <Route path="products/new" component={AdminPanelProductComponent}/>
                <Route path="products/edit/:id" component={AdminPanelProductComponent}/>
                <Route path="stock" component={AdminStockProductsComponent}/>
                <Route path="employees" component={AdminEmployeesComponent}/>
                <Route path="orders" component={AdminOrdersProductsComponent}/>
                <Route path="orders/:id" component={OrderCard}/>
                <Route path="blog" component={AdminPanelBlogComponent}/>
                <Route path="blog/new" component={AdminPanelPostComponent}/>
                <Route path="blog/edit/:id" component={AdminPanelPostComponent}/>
                <Route path="users" component={AdminPanelUsersComponent}/>
            </Router>
            <Route path="*" component={Root}>
                <IndexRoute component={NotFound} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
